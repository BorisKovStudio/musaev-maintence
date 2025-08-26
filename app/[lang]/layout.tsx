import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "MUSAEV & ASSOCIATES",
  description: "Site under development",
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col">
        {/* Header without menu */}
        <header className="w-full bg-transparent">
          <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between text-white">
            <Link
              href={`/${lang}`}
              className="text-2xl sm:text-3xl  uppercase"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {lang === "ru" ? "МУСАЕВ & ПАРТНЕРЫ" : "MUSAEV & ASSOCIATES"}
            </Link>
            {/* Language switcher aligned right */}
            {/* We rely on the current path; since this is a layout, we only know the base. Use location path via a client component if needed. To keep minimal and SSR-safe, we just switch root. */}
            <div
              className="flex items-center gap-2 text-sm uppercase"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <Link
                href={`/ru`}
                className={`px-2 py-1 border ${lang === "ru" ? "border-yellow-400" : "border-transparent"}`}
              >
                Рус
              </Link>
              <Link
                href={`/en`}
                className={`px-2 py-1 border ${lang === "en" ? "border-yellow-400" : "border-transparent"}`}
              >
                Eng
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
