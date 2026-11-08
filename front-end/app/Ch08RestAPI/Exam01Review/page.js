"use client";

import { useEffect, useState } from "react";
import { getReviewList } from "@/apis/reviewApi";
import Link from "next/link";

export default function Exam01Review() {
  const [reviews, setReviews] = useState([]);
  const [pager, setPager] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    // 방법1
    const loadReviews = async () => {
      try {
        const response = await getReviewList(pageNo);
        setReviews(response.data.data);
        setPager(response.data.pager);
      } catch (error) {
        console.error("후기 목록 조회 실패:", error);
      }
    };
    loadReviews();

    // 방법2
    // getReviewList(2)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("후기 목록 조회 실패:", error);
    //   });



  }, [pageNo]);

  return (
    <section className="min-w-0 w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam01Review</h2>
      </header>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-[800px] min-w-[800px] table-auto border-collapse text-sm">
            <caption className="pb-3 text-left">
              <div className="flex items-center justify-between">
                <span className="font-semibold">상품 후기 게시판</span>
                <Link href="/Ch08RestAPI/Exam01Review/ReviewWrite" className="rounded bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-600">
                  글쓰기
                </Link>
              </div>
            </caption>
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th scope="col" className="w-px whitespace-nowrap border-b border-zinc-300 px-3 py-2 text-center dark:border-zinc-700">번호</th>
                <th scope="col" className="w-full border-b border-zinc-300 px-3 py-2 text-left dark:border-zinc-700">제목</th>
                <th scope="col" className="w-px whitespace-nowrap border-b border-zinc-300 px-3 py-2 text-center dark:border-zinc-700">작성자</th>
                <th scope="col" className="w-px whitespace-nowrap border-b border-zinc-300 px-3 py-2 text-center dark:border-zinc-700">작성일</th>
                <th scope="col" className="w-px whitespace-nowrap border-b border-zinc-300 px-3 py-2 text-center dark:border-zinc-700">상품 번호</th>
                <th scope="col" className="w-px whitespace-nowrap border-b border-zinc-300 px-3 py-2 text-left dark:border-zinc-700">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.reviewId} className="border-b border-zinc-200 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
                  <td className="w-px whitespace-nowrap px-3 py-2 text-center">{review.reviewId}</td>
                  <td className="w-full px-3 py-2" title={review.title}>
                    <Link href={`/Ch08RestAPI/Exam01Review/ReviewDetail?reviewId=${review.reviewId}`} className="text-blue-600 hover:text-orange-600 hover:underline dark:text-blue-400 dark:hover:text-orange-400">
                      {review.title.length > 30 ? `${review.title.slice(0, 30)}...` : review.title}
                    </Link>
                  </td>
                  <td className="w-px whitespace-nowrap px-3 py-2 text-center">{review.writer}</td>
                  <td className="w-px whitespace-nowrap px-3 py-2 text-center">
                    {review.writedAt ? new Date(review.writedAt).toLocaleDateString("ko-KR") : "-"}
                  </td>
                  <td className="w-px whitespace-nowrap px-3 py-2 text-center">{review.productId}</td>
                  <td className="w-px whitespace-nowrap px-3 py-2">
                    {review.fileName ? <span>📎</span> : "-"}
                  </td>
                </tr>
              ))}
              {reviews.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-zinc-500 dark:text-zinc-400">
                    표시할 게시물이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        {pager && pager.totalPageNo > 0 && (
          <nav aria-label="게시물 페이지 이동" className="mt-4 flex w-[800px] flex-wrap items-center justify-center gap-1">
            <button type="button" aria-label="처음 페이지" title="처음 페이지" className="rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:hover:bg-zinc-800" disabled={pager.pageNo <= 1} onClick={() => setPageNo(1)}>
              처음
            </button>
            <button type="button" aria-label="이전 페이지 그룹" title="이전 페이지 그룹" className="rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:hover:bg-zinc-800" disabled={pager.groupNo <= 1} onClick={() => setPageNo(pager.startPageNo - 1)}>
              이전
            </button>
            {pager.pageArray.map((number) => (
              <button
                key={number}
                type="button"
                aria-label={`${number}페이지`}
                aria-current={pager.pageNo === number ? "page" : undefined}
                className={pager.pageNo === number
                  ? "rounded border border-orange-500 bg-orange-500 px-3 py-1 text-sm font-semibold text-white"
                  : "rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:hover:bg-zinc-800"}
                onClick={() => setPageNo(number)}
              >
                {number}
              </button>
            ))}
            <button type="button" aria-label="다음 페이지 그룹" title="다음 페이지 그룹" className="rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:hover:bg-zinc-800" disabled={pager.groupNo >= pager.totalGroupNo} onClick={() => setPageNo(pager.endPageNo + 1)}>
              다음
            </button>
            <button type="button" aria-label="마지막 페이지" title="마지막 페이지" className="rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:hover:bg-zinc-800" disabled={pager.pageNo >= pager.totalPageNo} onClick={() => setPageNo(pager.totalPageNo)}>
              맨끝
            </button>
          </nav>
        )}
        </div>
      </div>
    </section>
  );
}
