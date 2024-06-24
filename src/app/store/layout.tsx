import Header from "@/components/Header/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="main">
        {children}
      </div>
    </div>
  );
}
