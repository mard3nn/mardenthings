"use client";

import { Home, Mail } from "lucide-react";

export default function Page() {
  const scrollToContacts = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ХЕДЕР sticky */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Home className="w-9 h-9 text-white" strokeWidth={2.5} />
            <span className="text-3xl font-bold text-white tracking-tight">mardenthings</span>
          </a>

          <button
            onClick={scrollToContacts}
            className="text-white/80 hover:text-white transition text-lg font-medium flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Контакты
          </button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8">
            mardenthings
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-20">
            кряк вантапа в3 купить
          </p>

          <div className="text-left space-y-8 text-white/80 text-lg leading-relaxed bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <p>
              Может ли Бог создать такую додо-пиццу, которая в момент создания станет традиционной?
              Сколько традиционных блюд помещается на кончике еврейско-итальянского рестика в Нью-Йорк-Сити?
            </p>
            <p className="text-xl font-bold text-white">
              Если традиция упала посреди леса, может ли Пеннивайз начать сношать на ней ребёнка?
            </p>

            <div className="my-10 flex justify-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=c607b6fb5bc714926152f7a78c4f4703395afde1-4326647-images-thumbs&n=13"
                alt="философия додо-пиццы"
                className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white/20"
              />
            </div>

            <p className="italic text-white/60">
              вот ты щас читаешь это и думаешь, что я ебанутый, а просто хочу, чтобы ты задумался над смыслом жизни
              <br /><br />
              а ещё я просто люблю писать всякую хрень, чтобы люди думали, что я умный ВЖДЫЗВДАЛЫВ
            </p>
          </div>
        </div>
      </main>

      {/* КОНТАКТЫ */}
      <footer id="contacts" className="py-24 px-6 bg-black/30 border-t border-white/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-center text-4xl font-bold text-white mb-20">Контакты</h2>

          <div className="space-y-16">
            <a href="https://t.me/bes1n" target="_blank" rel="noopener" className="flex items-center justify-center gap-8 group hover:scale-105 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-16 h-16" />
              <span className="text-2xl text-white/90 group-hover:text-white transition">Telegram @bes1n</span>
            </a>

            <a href="https://github.com/mard3nn" target="_blank" rel="noopener" className="flex items-center justify-center gap-8 group hover:scale-105 transition">
              <svg className="w-16 h-16 text-white" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M48.854 0C21.839 0 0 22.094 0 49.52c0 21.956 13.993 40.622 33.406 47.232 2.441.45 3.336-1.061 3.336-2.354 0-1.161-.049-4.241-.075-8.324-13.584 2.956-16.454-6.548-16.454-6.548-2.227-5.66-5.434-7.17-5.434-7.17-4.445-3.043.339-2.983.339-2.983 4.922.347 7.51 5.054 7.51 5.054 4.367 7.496 11.455 5.334 14.243 4.077.429-3.173 1.706-5.334 3.106-6.56-10.84-1.23-22.243-5.42-22.243-24.148 0-5.335 1.906-9.694 5.03-13.118-.504-1.24-2.176-6.206.479-12.933 0 0 4.106-1.316 13.453 5.013 3.9-1.085 8.075-1.626 12.236-1.645 4.16.019 8.336.56 12.236 1.645 9.347-6.329 13.449-5.013 13.449-5.013 2.657 6.727 1.984 11.693.48 12.933 3.126 3.424 5.027 7.783 5.027 13.118 0 18.79-11.422 22.897-22.288 24.103 1.753 1.51 3.32 4.485 3.32 9.047 0 6.54-.058 11.826-.058 13.434 0 1.307 1.89 2.824 3.346 2.348C84.005 90.126 98 71.48 98 49.52 98 22.094 76.161 0 48.854 0z"/>
              </svg>
              <span className="text-2xl text-white/90 group-hover:text-white transition">GitHub /mard3nn</span>
            </a>

            <a href="https://steamcommunity.com/profiles/76561199815919131/" target="_blank" rel="noopener" className="flex items-center justify-center gap-8 group hover:scale-105 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" className="w-16 h-16" />
              <span className="text-2xl text-white/90 group-hover:text-white transition">Steam</span>
            </a>
          </div>

          <div className="text-center mt-20 text-white/40 text-sm">
            © 2025 mardenthings. все права перед смертью мозг чего
          </div>
        </div>
      </footer>
    </>
  );
}