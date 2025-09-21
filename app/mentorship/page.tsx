import { Metadata } from "next";
import { Check, X, Clock, Users, MessageCircle, Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurriculumModules } from "@/components/CurriculumModules";
import { CTABanner } from "@/components/CTABanner";
import { generatePageMetadata } from "@/lib/seo";
import { pricingTiers, disclaimer } from "@/data/pricing";

export const metadata: Metadata = generatePageMetadata({
  title: "1-on-1 Mentorship - Personal Trading Guidance",
  description:
    "Intensive 1-on-1 crypto trading mentorship with Smart Money Concepts. Weekly sessions, personal roadmap and direct feedback.",
  path: "/mentorship",
});

const oneOnOneTier = pricingTiers.find((tier) => tier.id === "one-on-one")!;

export default function MentorshipPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Premium Mentorship
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              1-on-1 Mentorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most intensive form of guidance with full personal attention.
              Custom training specifically for your trading goals and
              challenges.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Personal Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  100% focus on your situation, goals and challenges. No
                  distractions, no waiting lists, just pure personal guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Custom Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your learning path is completely adapted to your experience,
                  available time and specific trading goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Direct Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  WhatsApp access during office hours for direct questions and
                  real-time feedback on your trades.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">What's included</h2>
              <div className="space-y-4">
                {oneOnOneTier.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">What you DON'T get</h2>
              <div className="space-y-4">
                {[
                  "Guaranteed profits or income claims",
                  "Trading signals or copy-trading",
                  "24/7 availability (office hours only)",
                  "Financial advice or investment recommendations",
                  "Support for trading strategies other than SMC",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-primary shadow-lg">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">Most Popular</Badge>
                <CardTitle className="text-2xl">{oneOnOneTier.name}</CardTitle>
                <CardDescription>{oneOnOneTier.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary pt-4">
                  {oneOnOneTier.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {oneOnOneTier.description}
                </p>
                <CTABanner
                  title=""
                  description=""
                  primaryText={oneOnOneTier.cta}
                  secondaryText="More info"
                  className="!py-0 !bg-primary"
                />
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              How does it work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Intake Call",
                  description:
                    "Free 15-min introduction to discuss goals and expectations",
                },
                {
                  step: "2",
                  title: "Personal Roadmap",
                  description:
                    "Custom-made curriculum based on your experience and goals",
                },
                {
                  step: "3",
                  title: "Weekly Sessions",
                  description:
                    "60-90 min personal sessions with theory, practice and Q&A",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description:
                    "WhatsApp support and trade reviews between sessions",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> {disclaimer}
            </p>
          </div>
        </div>
      </section>

      <CurriculumModules />

      <CTABanner
        title="Start your 1-on-1 journey"
        description="Schedule a free intake call and discover how personal guidance can take your trading to the next level."
        primaryText="Schedule intake call"
        secondaryText="View other options"
      />
    </>
  );
}
