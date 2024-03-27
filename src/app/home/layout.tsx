import Navbar from "../ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex ">
        <div className="w-64 flex h-full min-h-screen bg-blue-500">
          <Navbar />
        </div>
        {/* Layout UI */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
