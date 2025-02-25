import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/FloatingButton";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) => {
  const {locale} = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <main>
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </main>
    </NextIntlClientProvider>
  );
};
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default Layout;
