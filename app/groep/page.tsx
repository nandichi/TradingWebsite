import { Metadata } from "next";
import {
  Check,
  Users,
  MessageSquare,
  Calendar,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/CTABanner";
import { PricingCard } from "@/components/PricingCard";
import { generatePageMetadata } from "@/lib/seo";
import { pricingTiers, disclaimer } from "@/data/pricing";

export const metadata: Metadata = generatePageMetadata({
  title: "Group Mentorship - Learn Together With Others",
  description:
    "Group mentorship for crypto trading with Smart Money Concepts. Weekly group calls, community and affordable price.",
  path: "/groep",
});

const groupTier = pricingTiers.find((tier) => tier.id === "group")!;

export default function GroepPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Community Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Group Mentorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The same high-quality SMC curriculum, but in a small group of
              motivated traders. Learn from each other and from me at an
              affordable price.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to professional SMC training for a fraction of the
                  price of 1-on-1 guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Small Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maximum 8-10 people per group so everyone gets personal
                  attention and feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from fellow students, share experiences and motivate
                  each other to stay consistent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Weekly group calls at fixed times with recordings for when you
                  can't make it.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Comparison */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Group vs 1-on-1: What's the difference?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Group Mentorship Benefits
                </h3>
                <div className="space-y-4">
                  {[
                    "Much more affordable than 1-on-1 guidance",
                    "Learn from different trading styles",
                    "Community support and accountability",
                    "Different perspectives and questions",
                    "Networking with fellow students",
                    "Less pressure, more relaxed learning environment",
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  What you miss vs 1-on-1
                </h3>
                <div className="space-y-4">
                  {[
                    "Less personal attention per session",
                    "No custom curriculum (follows group pace)",
                    "No WhatsApp support between sessions",
                    "Less time for individual trade reviews",
                    "No flexibility in session timing",
                    "Focus is on group needs, not individual",
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              What do you get?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {groupTier.features
                  .slice(0, Math.ceil(groupTier.features.length / 2))
                  .map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
              <div className="space-y-4">
                {groupTier.features
                  .slice(Math.ceil(groupTier.features.length / 2))
                  .map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-primary/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{groupTier.name}</CardTitle>
                <CardDescription>{groupTier.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary pt-4">
                  {groupTier.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {groupTier.description}
                </p>
                <PricingCard
                  primaryText={groupTier.cta}
                  secondaryText="Plan intake"
                />
              </CardContent>
            </Card>
          </div>

          {/* Schedule */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Group Session Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  day: "Tuesday",
                  time: "20:00 - 21:30 CET",
                  topic: "Theory & Concepts",
                  description: "New SMC concepts, explanations and examples",
                },
                {
                  day: "Thursday",
                  time: "20:00 - 21:30 CET",
                  topic: "Practice & Analysis",
                  description: "Chart analysis exercises and trade reviews",
                },
                {
                  day: "Sunday",
                  time: "19:00 - 20:00 CET",
                  topic: "Q&A & Planning",
                  description: "Answering questions and weekly planning",
                },
              ].map((session) => (
                <Card key={session.day}>
                  <CardHeader>
                    <CardTitle className="text-lg">{session.day}</CardTitle>
                    <CardDescription>{session.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">{session.topic}</h4>
                    <p className="text-sm text-muted-foreground">
                      {session.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                All sessions are recorded. Can't join live? Watch back later!
              </p>
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

      <CTABanner
        title="Join the next group"
        description="Spots are limited to 10 people per group. Schedule an intake call to see if group mentorship fits you."
        primaryText="Schedule intake"
        secondaryText="Compare options"
      />
    </>
  );
}
