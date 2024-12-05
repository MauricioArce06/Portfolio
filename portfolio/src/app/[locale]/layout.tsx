import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Arce",
  description: "Mauricio Arce Portfolio",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params; // Esperamos a que la promesa se resuelva si es necesario
  const locale = resolvedParams.locale;

  if (locale !== "en" && locale !== "es") {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={sora.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
