export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#8F866E' }}>{children}</body>
    </html>
  );
}
