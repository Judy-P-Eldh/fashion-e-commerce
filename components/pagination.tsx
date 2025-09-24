import { PaginationProps } from "@/lib/interfaces/pagination";
import Link from "next/link";

export default function Pagination({
  currentPage,
  maxPage,
  baseUrl,
}: PaginationProps) {
  return (
    <div className="flex gap-4 justify-center">
      {currentPage > 1 && (
        <Link
          className="p-2 border-2 rounded-sm"
          href={`${baseUrl}&page=${currentPage - 1}`}
        >
          Previous
        </Link>
      )}

      <span className="p-2">{`Page ${currentPage} of ${maxPage}`}</span>

      {currentPage < maxPage && (
        <Link
          className="p-2 border-2 rounded-sm"
          href={`${baseUrl}&page=${currentPage + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
