export const metadata = {
  title: "RSC Demo",
  description: "React Server Components with Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 24 }}>
        <h1>🧩 RSC Demo</h1>
        {children}
      </body>
    </html>
  );
}
