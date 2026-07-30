import Link from "next/link";
import { Bi } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

const nav = [
  { href: "/", bn: "হোম", en: "Home" },
  { href: "/cases", bn: "মামলাসমূহ", en: "Cases" },
  { href: "/methodology", bn: "পদ্ধতি", en: "Methodology" },
  { href: "/about", bn: "আমাদের সম্পর্কে", en: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/90 border-b rule">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center leading-tight shrink-0">
          <Bi
            bn="এমপি চিকিৎসা নজরদারি"
            en="MP Treatment Watch"
            className="font-headline text-lg sm:text-xl font-semibold"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              <Bi bn={item.bn} en={item.en} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <nav className="md:hidden flex items-center gap-4 text-xs">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-foreground hover:text-accent">
                <Bi bn={item.bn} en={item.en} />
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
