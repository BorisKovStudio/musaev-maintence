import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site under development | MUSAEV & ASSOCIATES",
};

const texts = {
  ru: {
    title: "Сайт находится в разработке",
    description:
      "Мы работаем над обновлением. Пожалуйста, загляните позже.",
  },
  en: {
    title: "Our site is under development",
    description: "We are working on updates. Please check back soon.",
  },
};

export default async function MaintenancePage({
  params,
}: {
  params: Promise<{ lang: "ru" | "en" }>;
}) {
  const { lang } = await params;
  const t = texts[lang] ?? texts.ru;

  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-white/90">
          {t.description}
        </p>
      </div>
    </section>
  );
}
