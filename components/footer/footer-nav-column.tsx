import { Plus } from "lucide-react";
export default function FooterNavColumn({
  children,
  title,
  extraContent = false,
}: {
  children: React.ReactNode;
  title: string;
  extraContent?: boolean;
}) {
  return (
    <nav
      area-label={title}
      className="flex lg:flex-col justify-between lg:justify-start border-b border-dark lg:border-0 py-2"
    >
      <h3 className="font-courier-prime lg:mb-6">{title}</h3>
      {children}
      {extraContent ? (
        <button className="cursor-pointer" aria-label='open'>
          <Plus className="lg:hidden"/>
        </button>
      ) : (
        ""
      )}
    </nav>
  );
}
