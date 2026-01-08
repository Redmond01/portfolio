


import "./globals.css";

export const metadata = {
  title: "Oke Raymond Jesutofunmi | Portfolio",
  description: "Software Engineer Portfolio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
