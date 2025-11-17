import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mardenthings",
  description: "тут живут мои штуки и приколы",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}