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
            font-family: 'Inter', system-ui, sans-serif;
            background: linear-gradient(135deg, #581c87 0%, #4f46e5 50%, #7c3aed 100%);
            color: white;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            antialiased: true;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
          .backdrop-blur { backdrop-filter: blur(20px); }
          .bg-white-5 { background: rgba(255, 255, 255, 0.05); }
          .border-white-10 { border-color: rgba(255, 255, 255, 0.1); }
          .text-white-80 { color: rgba(255, 255, 255, 0.8); }
          .text-white-90 { color: rgba(255, 255, 255, 0.9); }
          .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          .rounded-2xl { border-radius: 1.5rem; }
          .rounded-3xl { border-radius: 2rem; }
          .transition { transition: all 0.3s ease; }
          .hover-scale-105:hover { transform: scale(1.05); }
          .space-y-8 > * + * { margin-top: 2rem; }
          .space-y-16 > * + * { margin-top: 4rem; }
          .gap-8 { gap: 2rem; }
          .gap-3 { gap: 0.75rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
          .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-20 { margin-bottom: 5rem; }
          .text-center { text-align: center; }
          .text-left { text-align: left; }
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .justify-between { justify-content: space-between; }
          .max-w-4xl { max-width: 1024px; }
          .max-w-2xl { max-width: 512px; }
          .text-lg { font-size: 1.125rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
          .text-7xl { font-size: 4.5rem; }
          .leading-relaxed { line-height: 1.625; }
          @media (min-width: 768px) {
            .md-text-9xl { font-size: 6rem; }
            .md-text-3xl { font-size: 1.875rem; }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}