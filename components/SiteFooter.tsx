import Link from "next/link";
import { Bi } from "@/components/LanguageProvider";

export default function SiteFooter() {
  return (
    <footer className="border-t rule mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-3 text-sm text-muted">
        <div>
          <Bi
            bn="এমপি চিকিৎসা নজরদারি"
            en="MP Treatment Watch"
            className="block font-headline text-base text-foreground mb-2"
          />
          <Bi
            bn="এমপি ট্রিটমেন্ট ওয়াচ জনস্বাস্থ্য সেবার বৈষম্য নিয়ে একটি জনস্বার্থমূলক তথ্য প্রকল্প।"
            en="MP Treatment Watch is a public-accountability data project on healthcare access inequality in Bangladesh."
          />
        </div>
        <div>
          <Bi bn="সম্পাদকীয় নীতি" en="Editorial standards" className="block text-foreground mb-2 font-medium" />
          <Bi
            bn="এই সাইটের প্রতিটি এন্ট্রির জন্য একটি প্রকাশিত, উদ্ধৃত সূত্র প্রয়োজন। বিস্তারিত জানতে আমাদের পদ্ধতি পড়ুন।"
            en="Every entry on this site requires a published, cited source. Read our methodology for how each figure is sourced and verified."
          />
        </div>
        <div>
          <Bi bn="সংশোধন" en="Corrections" className="block text-foreground mb-2 font-medium" />
          <p>
            <Bi bn="ভুল খুঁজে পেয়েছেন বা তথ্য শেয়ার করতে চান? আমাদের " en="Spot an error or have documentation to share? See our " />
            <Link href="/methodology#corrections" className="text-accent hover:underline">
              <Bi bn="সংশোধন নীতি" en="correction policy" />
            </Link>
            <Bi bn=" দেখুন।" en=" to submit a request." />
          </p>
        </div>
      </div>
      <div className="border-t rule">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-faint flex flex-wrap justify-between gap-2">
          <Bi
            bn={`© ${new Date().getFullYear()} এমপি চিকিৎসা নজরদারি`}
            en={`© ${new Date().getFullYear()} MP Treatment Watch`}
          />
          <Bi
            bn="প্রতিটি এন্ট্রির সর্বশেষ আপডেটের তারিখ অনুযায়ী তথ্য হালনাগাদ।"
            en="Data current as of last case update dates listed per entry."
          />
        </div>
      </div>
    </footer>
  );
}
