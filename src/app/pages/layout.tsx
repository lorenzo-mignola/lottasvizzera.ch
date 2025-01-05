export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="o p-5 lg:p-20 lg:px-40">{children}</main>;
}
