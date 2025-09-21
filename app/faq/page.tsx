import { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/data/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Answers to the most frequently asked questions about our crypto trading mentorship programs with Smart Money Concepts.",
  path: "/faq",
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All answers to questions about our mentorship programs, Smart
              Money Concepts and the learning process.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-16 text-center bg-muted/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Don't see your question?
            </h2>
            <p className="text-muted-foreground mb-6">
              No problem! Schedule a free intake call where we can discuss all
              your questions and see which program fits you best.
            </p>
            <CTABanner
              title=""
              description=""
              primaryText="Schedule free intake"
              secondaryText="Send an email"
              className="!py-0 !bg-primary"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for the next step?"
        description="Now that you have all the information, it's time to take action. Schedule a free introduction call."
        primaryText="Schedule intake call"
        secondaryText="View programs"
      />
    </>
  );
}
