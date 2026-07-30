import { Bi } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";

export const metadata = { title: "আমাদের সম্পর্কে · About — MP Treatment Watch" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <Bi bn="আমাদের সম্পর্কে" en="About" className="block text-xs uppercase tracking-[0.25em] text-accent mb-3" />
      <Bi
        bn="স্বাস্থ্যসেবার বৈষম্য নিয়ে জনস্বার্থমূলক জবাবদিহিতা"
        en="Public-interest accountability on healthcare access inequality"
        className="block font-headline text-3xl sm:text-4xl font-semibold mb-8"
      />

      <Reveal className="space-y-6 text-sm text-muted leading-relaxed">
        <Bi
          bn="এমপি চিকিৎসা নজরদারি অ্যাক্টিভেট রাইটস দ্বারা পরিচালিত একটি জনস্বার্থমূলক তথ্য সাংবাদিকতা প্রকল্প।"
          en="MP Treatment Watch is a public-interest data journalism project run by Activate Rights."
          className="block font-medium text-foreground"
        />
        <Bi
          bn="এটি একটি ক্রমাগত ধারা দৃশ্যমান করার জন্য বিদ্যমান: বাংলাদেশের নির্বাচিত কর্মকর্তা এবং কেন্দ্রীয় দলীয় নেতারা প্রায়ই বিদেশে চিকিৎসার জন্য যান যা, অনেক নথিভুক্ত ক্ষেত্রে, দেশেই উপলব্ধ — যখন তাদের তদারকিতে থাকা স্বাস্থ্য ব্যবস্থা সাধারণ নাগরিকদের জন্য অপ্রতুল থেকে যায়।"
          en="It exists to make visible a persistent pattern: elected officials and central party leaders in Bangladesh frequently travel abroad for medical treatment that is, in many documented cases, available domestically — while the health system they oversee remains under-resourced for ordinary citizens."
          className="block"
        />
        <Bi
          bn="এটি সর্বোত্তম চিকিৎসার সন্ধানের বিরুদ্ধে যুক্তি নয়। এটি একটি স্বচ্ছতা প্রকল্প — একজন জনপ্রতিনিধির বিদেশে চিকিৎসার খরচকে দেশে সমতুল্য চিকিৎসার প্রকৃত, উদ্ধৃত খরচের পাশে রেখে, যাতে পাঠক ও ভোটাররা সম্পদ বরাদ্দ, স্বাস্থ্য বিনিয়োগের অগ্রাধিকার এবং জবাবদিহিতা সম্পর্কে নিজেদের সিদ্ধান্তে আসতে পারেন।"
          en="This is not an argument against seeking the best possible care. It is a transparency project — placing a public figure's medical spending abroad next to the true, sourced cost of equivalent care at home, so readers and voters can draw their own conclusions about resource allocation, healthcare investment priorities, and accountability."
          className="block"
        />
        <p>
          <Bi
            bn="প্রতিটি মামলা সূত্রযুক্ত, তারিখযুক্ত এবং যাচাই আত্মবিশ্বাস অনুযায়ী শ্রেণীবদ্ধ। আমরা অসোর্সড দাবি প্রকাশ করি না। সম্পূর্ণ বিস্তারিত জন্য আমাদের "
            en="Every case is sourced, dated, and tiered by verification confidence. We do not publish unsourced claims. Read our "
          />
          <a href="/methodology" className="text-accent hover:underline">
            <Bi bn="পদ্ধতি" en="methodology" />
          </a>
          <Bi
            bn=" পড়ুন — কীভাবে তথ্য সংগ্রহ, অনুমান এবং সংশোধন করা হয়।"
            en=" for full detail on how data is collected, estimated, and corrected."
          />
        </p>
        <Bi
          bn="এই সংস্করণে নাম ও ঘটনা চিত্রণের উদ্দেশ্যে ব্যবহৃত হয়েছে এবং কোনো বাস্তব ব্যক্তির প্রতিনিধিত্ব করে না।"
          en="Names and cases in this build are illustrative and do not represent real individuals."
          className="block text-faint text-xs border-t rule pt-6"
        />
      </Reveal>
    </div>
  );
}
