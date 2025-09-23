"use client";
import { Trash2Icon } from "lucide-react";
export default function DeleteButton({
  id,
  handleClick,
}: {
  id: number;
  handleClick: (id: number) => void;
}) {
  return (
    <button onClick={() => handleClick(id)}>
      <Trash2Icon strokeWidth={1} size={25} />
    </button>
  );
}
