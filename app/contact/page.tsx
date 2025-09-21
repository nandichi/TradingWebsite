import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact & Schedule Intake Call",
  description:
    "Schedule a free 15-minute intake call for crypto trading mentorship. WhatsApp, email or Calendly available.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Free introduction
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Intake Call
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The first step towards consistently profitable trading starts with
              a free 15-minute introduction call. No obligations, just an open
              conversation.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Calendly</CardTitle>
                <CardDescription>Schedule directly online</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Choose a time slot that works for you in my online calendar.
                  Instant confirmation and reminder via email.
                </p>
                <Button asChild className="w-full">
                  <Link href={siteConfig.contact.calendlyUrl}>
                    Schedule via Calendly
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Direct contact</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Send me a message via WhatsApp and I'll personally schedule a
                  suitable time for our conversation.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={siteConfig.contact.whatsappUrl}>
                    Send WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Traditional contact</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Prefer email? Send me your question and availability, and I'll
                  respond within 24 hours.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`mailto:${siteConfig.contact.email}`}>
                    Send email
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              How does the intake process work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Schedule the call",
                  description:
                    "Choose the method that works best for you: Calendly, WhatsApp or email",
                  icon: Calendar,
                },
                {
                  step: "2",
                  title: "15-min introduction",
                  description:
                    "Free video call where we discuss your goals, experience and expectations",
                  icon: Clock,
                },
                {
                  step: "3",
                  title: "Program advice",
                  description:
                    "I advise which program (1-on-1, group, streams) fits you best",
                  icon: CheckCircle,
                },
                {
                  step: "4",
                  title: "You decide",
                  description:
                    "No pressure, no obligations. You decide if and when you want to start",
                  icon: CheckCircle,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What to Expect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What we discuss</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Your current experience with crypto trading",
                    "Goals and expectations for the future",
                    "Available time for learning and practicing",
                    "Which program fits your situation best",
                    "Questions about Smart Money Concepts",
                    "Practical details about the mentorship",
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  What you can expect from me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Honest advice without sales pressure",
                    "Realistic expectations about results",
                    "Transparency about what is/isn't possible",
                    "Personal attention during the conversation",
                    "Answers to all your questions",
                    "A no-obligation advice about next steps",
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="bg-muted/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently asked questions about the intake
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">
                    Is the intake call really free?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, completely free and without obligations. It's an
                    introduction call to see if we're a good match.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    How long does the call take?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    About 15 minutes. Enough time to get to know each other and
                    answer your questions, but not too long.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Do I need to prepare?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, just be yourself. It can help to think about your goals
                    and how much time you have available for learning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    What if I have a lot of questions?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect! That's exactly what the call is for. We'll take
                    time for all your questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
