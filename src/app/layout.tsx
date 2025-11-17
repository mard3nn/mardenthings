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
        <style>{`
          body {
            margin: 0;
            font-family: 'Inter', system-ui, sans-serif;
            background: linear-gradient(135deg, #581c87 0%, #4338ca 50%, #7c3aed 100%);
            color: white;
            min-height: 100vh;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}