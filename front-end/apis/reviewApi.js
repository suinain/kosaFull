import api from "./axios";

export function getReviewList(pageNo = 1) {
  return api.get("/review/list", {
    params: { pageNo: pageNo },
  });
}

export function reviewWrite(formData) {
  return api.post("/review/write", formData);
}

//주소요청
export function reviewDetail(reviewId) {
  return api.get("/review/detail", {
    params: { reviewId: reviewId },
  });
}


//url만만든다
export function getReviewFileUrl(reviewId, { download, version } = {}) {
  return api.getUri({ url: "/review/file", params: { reviewId, download, version } });
}


export function reviewUpdate(formData) {
  return api.put("/review/update", formData);
}
