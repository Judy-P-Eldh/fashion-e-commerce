export default function FooterNavColumn({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <nav area-label={title} className="flex md:flex-col justify-between md:justify-start border-b md:border-0">
      <h3 className="font-courier-prime mb-6">{title}</h3>
      {children}
    </nav>
  );
}
