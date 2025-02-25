//NEXT-INTL
//https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const languages = [
  { name: "English", locale: "en" },
  { name: "Español", locale: "es" },
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map(lang => lang.locale),

  // Used when no locale matches
  defaultLocale: "en",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
