"use client";

import { Home, Mail } from "lucide-react";

export default function Page() {
  const scrollToContacts = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <Home width={36} height={36} strokeWidth={2.5} style={{ color: 'white' }} />
            <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.025em' }}>mardenthings</span>
          </a>
          <button
            onClick={scrollToContacts}
            style={{ color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', fontSize: '1.125rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
          >
            <Mail width={20} height={20} style={{ color: 'inherit' }} />
            Контакты
          </button>
        </div>
      </header>

      <main style={{ flex: 1, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', color: 'white', marginBottom: '2rem' }}>mardenthings</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', marginBottom: '5rem' }}>
            кряк вантапа в3 купить
          </p>

          <div style={{ textAlign: 'left', margin: '2rem 0', color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', lineHeight: '1.625', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '2rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p>
              Может ли Бог создать такую додо-пиццу, которая в момент создания станет традиционной?
              Сколько традиционных блюд помещается на кончике еврейско-итальянского рестика в Нью-Йорк-Сити?
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginTop: '1rem' }}>
              Если традиция упала посреди леса, может ли Пеннивайз начать сношать на ней ребёнка?
            </p>

            <div style={{ margin: '2.5rem 0', display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://avatars.mds.yandex.net/i?id=c607b6fb5bc714926152f7a78c4f4703395afde1-4326647-images-thumbs&n=13"
                alt="философия додо-пиццы"
                style={{ borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', maxWidth: '100%', height: 'auto', border: '4px solid rgba(255,255,255,0.2)' }}
              />
            </div>

            <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
              вот ты щас читаешь это и думаешь, что я ебанутый, а я просто хочу, чтобы ты задумался над смыслом жизни
              <br /><br />
              а ещё я просто люблю писать всякую хрень, чтобы люди думали, что я умный
              ВЖДЫЗВДАЛЫВ
            </p>
          </div>
        </div>
      </main>

      <footer id="contacts" style={{ padding: '6rem 1.5rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '512px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '5rem' }}>Контакты</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <a href="https://t.me/bes1n" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', transition: 'all 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.color = 'white', e.currentTarget.style.transform = 'scale(1.05)' } onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)', e.currentTarget.style.transform = 'scale(1)' }>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{ width: '64px', height: '64px' }} />
              <span style={{ fontSize: '1.5rem' }}>Telegram @bes1n</span>
            </a>

            <a href="https://github.com/mard3nn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', transition: 'all 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.color = 'white', e.currentTarget.style.transform = 'scale(1.05)' } onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)', e.currentTarget.style.transform = 'scale(1)' }>
              <svg width="64" height="64" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }}>
                <path fill="currentColor" d="M48.854 0C21.839 0 0 22.094 0 49.52c0 21.956 13.993 40.622 33.406 47.232 2.441.45 3.336-1.061 3.336-2.354 0-1.161-.049-4.241-.075-8.324-13.584 2.956-16.454-6.548-16.454-6.548-2.227-5.66-5.434-7.17-5.434-7.17-4.445-3.043.339-2.983.339-2.983 4.922.347 7.51 5.054 7.51 5.054 4.367 7.496 11.455 5.334 14.243 4.077.429-3.173 1.706-5.334 3.106-6.56-10.84-1.23-22.243-5.42-22.243-24.148 0-5.335 1.906-9.694 5.03-13.118-.504-1.24-2.176-6.206.479-12.933 0 0 4.106-1.316 13.453 5.013 3.9-1.085 8.075-1.626 12.236-1.645 4.16.019 8.336.56 12.236 1.645 9.347-6.329 13.449-5.013 13.449-5.013 2.657 6.727 1.984 11.693.48 12.933 3.126 3.424 5.027 7.783 5.027 13.118 0 18.79-11.422 22.897-22.288 24.103 1.753 1.51 3.32 4.485 3.32 9.047 0 6.54-.058 11.826-.058 13.434 0 1.307 1.89 2.824 3.346 2.348C84.005 90.126 98 71.48 98 49.52 98 22.094 76.161 0 48.854 0z"/>
              </svg>
              <span style={{ fontSize: '1.5rem' }}>GitHub /mard3nn</span>
            </a>

            <a href="https://steamcommunity.com/profiles/76561199815919131/" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', transition: 'all 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.color = 'white', e.currentTarget.style.transform = 'scale(1.05)' } onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)', e.currentTarget.style.transform = 'scale(1)' }>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" style={{ width: '64px', height: '64px' }} />
              <span style={{ fontSize: '1.5rem' }}>Steam</span>
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
            © 2025 mardenthings. все права перед смертью мозг чего
          </div>
        </div>
      </footer>
    </>
  );
}