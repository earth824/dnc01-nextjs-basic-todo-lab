export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Header</div>
      {children}
    </>
  );
}
