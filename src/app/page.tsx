"use client";

import { Home, Mail } from "lucide-react";

export default function Page() {
const scrollToContacts = () => {
  // Работает и на локалхосте, и на GitHub Pages
  const element = document.getElementById("contacts");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    // Если по какой-то причине не нашёл — скроллим в самый низ
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
};

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "white",
            }}
          >
            <Home width={36} height={36} strokeWidth={2.5} />
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              mardenthings
            </span>
          </a>

          <button
            onClick={scrollToContacts}
            style={{
              background: "none",
              border: "none",
              color: "#e0e0e0",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "white")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#e0e0e0")}
          >
            <Mail width={20} height={20} />
            Контакты
          </button>
        </div>
      </header>

      {/* Main content */}
      <main style={{ padding: "80px 16px", flex: 1 }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "80px", fontWeight: 900, marginBottom: "32px" }}>
            mardenthings
          </h1>
          <p style={{ fontSize: "36px", opacity: 0.8, marginBottom: "80px" }}>
            кряк вантапа в3 купить
          </p>

          <div
            style={{
              textAlign: "left",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "32px",
              padding: "40px",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            <p>
              Может ли Бог создать такую додо-пиццу, которая в момент создания станет традиционной?
            </p>
            <p>
              Сколько традиционных блюд помещается на кончике еврейско-итальянского рестика в Нью-Йорк-Сити?
            </p>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "24px 0" }}>
              Если традиция упала посреди леса, может ли Пеннивайз начать сношать на ней ребёнка?
            </p>

            <div style={{ textAlign: "center", margin: "40px 0" }}>
              <img
                src="https://avatars.mds.yandex.net/i?id=c607b6fb5bc714926152f7a78c4f4703395afde1-4326647-images-thumbs&n=13"
                alt="додо-пицца философия"
                style={{
                  borderRadius: "16px",
                  maxWidth: "100%",
                  border: "4px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              />
            </div>

            <p style={{ fontStyle: "italic", opacity: 0.7 }}>
              вот ты щас читаешь это и думаешь, что я ебанутый, а я просто хочу, чтобы ты задумался над смыслом жизни
              <br />
              <br />
              а ещё я просто люблю писать всякую хрень, чтобы люди думали, что я умный ВЖДЫЗВДАЛЫВ
            </p>
          </div>
        </div>
      </main>

      {/* Footer / Contacts */}
      <footer
        id="contacts"
        style={{
          padding: "96px 16px",
          background: "rgba(0,0,0,0.3)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "80px" }}>
            Контакты
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {/* Telegram */}
            <a
              href="https://t.me/bes1n"
              target="_blank"
              rel="noopener"
              style={{
                color: "#e0e0e0",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                fontSize: "28px",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#e0e0e0";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                width={64}
                height={64}
                alt="Telegram"
              />
              Telegram @bes1n
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mard3nn"
              target="_blank"
              rel="noopener"
              style={{
                color: "#e0e0e0",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                fontSize: "28px",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#e0e0e0";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <svg width="64" height="64" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M48.854 0C21.839 0 0 22.094 0 49.52c0 21.956 13.993 40.622 33.406 47.232 2.441.45 3.336-1.061 3.336-2.354 0-1.161-.049-4.241-.075-8.324-13.584 2.956-16.454-6.548-16.454-6.548-2.227-5.66-5.434-7.17-5.434-7.17-4.445-3.043.339-2.983.339-2.983 4.922.347 7.51 5.054 7.51 5.054 4.367 7.496 11.455 5.334 14.243 4.077.429-3.173 1.706-5.334 3.106-6.56-10.84-1.23-22.243-5.42-22.243-24.148 0-5.335 1.906-9.694 5.03-13.118-.504-1.24-2.176-6.206.479-12.933 0 0 4.106-1.316 13.453 5.013 3.9-1.085 8.075-1.626 12.236-1.645 4.16.019 8.336.56 12.236 1.645 9.347-6.329 13.449-5.013 13.449-5.013 2.657 6.727 1.984 11.693.48 12.933 3.126 3.424 5.027 7.783 5.027 13.118 0 18.79-11.422 22.897-22.288 24.103 1.753 1.51 3.32 4.485 3.32 9.047 0 6.54-.058 11.826-.058 13.434 0 1.307 1.89 2.824 3.346 2.348C84.005 90.126 98 71.48 98 49.52 98 22.094 76.161 0 48.854 0z"
                />
              </svg>
              GitHub /mard3nn
            </a>

            {/* Steam */}
            <a
              href="https://steamcommunity.com/profiles/76561199815919131/"
              target="_blank"
              rel="noopener"
              style={{
                color: "#e0e0e0",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                fontSize: "28px",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#e0e0e0";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                width={64}
                height={64}
                alt="Steam"
              />
              Steam
            </a>
          </div>

          <div style={{ marginTop: "80px", opacity: 0.4, fontSize: "14px" }}>
            © 2025 mardenthings. все права перед смертью мозг чего
          </div>
        </div>
      </footer>
    </>
  );
}