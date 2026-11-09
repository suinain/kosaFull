package com.mycompany.demo.database.controller;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.dto.ReviewDeleteResponse;
import com.mycompany.demo.database.dto.ReviewDetailResponse;
import com.mycompany.demo.database.dto.ReviewListItemResponse;
import com.mycompany.demo.database.dto.ReviewUpdateRequest;
import com.mycompany.demo.database.dto.ReviewUpdateResponse;
import com.mycompany.demo.database.dto.ReviewWriteRequest;
import com.mycompany.demo.database.dto.ReviewWriteResponse;
import com.mycompany.demo.database.entity.Review;
import com.mycompany.demo.database.service.ReviewService;
import com.mycompany.demo.jwt.service.JwtService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/review")
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;
    private final JwtService jwtService;

    public ReviewController(ReviewService reviewService, JwtService jwtService) {
        this.reviewService = reviewService;
        this.jwtService = jwtService;
    }

    @GetMapping("/list")
    public Map<String, Object> listBoard(
            @RequestParam(value = "pageNo", defaultValue = "1") int pageNo) {
        Map<String, Object> where = null;
        int totalRows = reviewService.pagingTotalRows(where);
        Pager pager = new Pager(5, 5, totalRows, pageNo);
        List<Review> list = reviewService.listReview(pager, where);
        List<ReviewListItemResponse> listReviewResponse = new ArrayList<>();
        for (Review review : list) {
            ReviewListItemResponse reviewListItemResponse = new ReviewListItemResponse();
            reviewListItemResponse.setReviewId(review.getReviewId());
            reviewListItemResponse.setTitle(review.getTitle());
            reviewListItemResponse.setWriter(review.getWriter());
            reviewListItemResponse.setWritedAt(review.getWritedAt());
            reviewListItemResponse.setProductId(review.getProductId());
            reviewListItemResponse.setFileName(review.getFileName());
            listReviewResponse.add(reviewListItemResponse);
        }
        Map<String, Object> map = Map.of(
                "pager", pager,
                "data", listReviewResponse);
        return map;
    }

    @PostMapping("/write")
    public ReviewWriteResponse write(ReviewWriteRequest request) throws IOException {
        // Review 엔티티로 변환
        Review review = new Review();
        review.setTitle(request.getTitle());
        review.setContent(request.getContent());
        review.setWriter(request.getWriter());
        review.setProductId(request.getProductId());

        if (request.getFile() != null && !request.getFile().isEmpty()) {
            review.setFileName(request.getFile().getOriginalFilename());
            review.setFileType(request.getFile().getContentType());
            review.setFileData(request.getFile().getBytes());
        }

        // 서비스로 엔티티를 전달해서 글쓰기 처리
        reviewService.write(review);

        ReviewWriteResponse reviewWriteResponse = new ReviewWriteResponse();
        reviewWriteResponse.setStatus("success");
        return reviewWriteResponse;
    }

    @GetMapping(value = "/detail", headers = "Authorization")
    public ReviewDetailResponse detail(@RequestHeader("Authorization") String authorization,
                                        @RequestParam("reviewId") long reviewId) {
        
        // Authorization 헤더값에서 jwt 토큰 얻기
        String jwt = authorization.substring(7);
        log.info("jwt :  " + jwt);

        // 유효성 검사 - 실패 : 런타임 예외 발생
        jwtService.validateJwt(jwt);

        Review review = reviewService.getReview(reviewId);
        ReviewDetailResponse response = new ReviewDetailResponse();
        response.setReviewId(review.getReviewId());
        response.setTitle(review.getTitle());
        response.setContent(review.getContent());
        response.setWriter(review.getWriter());
        response.setProductId(review.getProductId());
        response.setFileName(review.getFileName());
        response.setWritedAt(review.getWritedAt());
        return response;
    }

    @GetMapping("/file")
    public ResponseEntity<byte[]> file(@RequestParam("reviewId") long reviewId,
            @RequestParam(value = "download", defaultValue = "false") boolean download) {
        // DB에 해당 reviewId의 행을 읽고 엔티티로 반환
        Review review = reviewService.getReview(reviewId);

        // 해당 게시물에 첨부가 없을 경우 -----------------
        if (review == null || review.getFileData() == null) {
            // 404 응답
            return ResponseEntity.notFound().build();
        }

        // 응답 본문에 있는 데이터의 타입 Content-Type에 설정하기 준비
        String type = review.getFileType(); // image/jpeg, image/png, ... (MIME Type)
        MediaType mediaType = MediaType.parseMediaType(type);

        // 브라우저가 다운로드할 파일 이름을 설정
        String fileName = review.getFileName();

        // 파일이름에 한글이 포함돼있을 경우 한글을 인코딩
        String encodedFileName = URLEncoder.encode(fileName, StandardCharsets.UTF_8).replace("+", "%20");

        // 응답 헤더에 Content-Dispositoin 헤더값으로 들어갈 분자열
        String disposition = "attachment; filename*=UTF-8''" + encodedFileName;

        // 200 응답
        return ResponseEntity.ok()
                .contentType(mediaType) // Content-Type : image/jpeg
                .header(HttpHeaders.CONTENT_DISPOSITION, disposition) // Content-Disposition : attachment;...
                // .header("Content-Type", type)
                .body(review.getFileData());
    }

    @PutMapping("/update")
    public ReviewUpdateResponse update(ReviewUpdateRequest request) throws IOException {
        // Review 엔티티로 변환
        Review review = new Review();
        review.setReviewId(request.getReveiwId());
        review.setTitle(request.getTitle());
        review.setContent(request.getContent());
        if (request.isDeleteFile() == true) {
            review.setFileName("delete");
        }

        if (request.getFile() != null && !request.getFile().isEmpty()) {
            review.setFileName(request.getFile().getOriginalFilename());
            review.setFileType(request.getFile().getContentType());
            review.setFileData(request.getFile().getBytes());
        }

        // 서비스로 엔티티를 전달해서 글쓰기 처리
        reviewService.update(review);

        ReviewUpdateResponse reviewUpdateResponse = new ReviewUpdateResponse();
        reviewUpdateResponse.setStatus("success");
        return reviewUpdateResponse;
    }

    @DeleteMapping("/delete")
    public ReviewDeleteResponse delete(@RequestParam("reviewId") String reviewId) {
        // 서비스를 통해 게시물을 삭제
        reviewService.delete(reviewId);

        ReviewDeleteResponse ReviewDeleteResponse = new ReviewDeleteResponse();
        ReviewDeleteResponse.setStatus("success");
        return ReviewDeleteResponse;
    }
}
