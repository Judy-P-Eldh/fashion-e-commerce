import { PaginationProps } from "@/lib/interfaces/pagination";
import Link from "next/link";

export default function Pagination({
  currentPage,
  maxPage,
  baseUrl,
}: PaginationProps) {
  const separator = baseUrl.includes("?") ? "&" : "?";
  return (
    <div className="flex gap-4 justify-center">
      {currentPage > 1 && (
        <Link
          className="button py-0 px-5"
          href={`${baseUrl}${separator}page=${currentPage - 1}`}
        >
          Previous
        </Link>
      )}

      <span className="p-2">{`Page ${currentPage} of ${maxPage}`}</span>

      {currentPage < maxPage && (
        <Link
          className="button py-0 px-5"
          href={`${baseUrl}${separator}page=${currentPage + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
