import { Metadata } from "next";
import {
  Check,
  Video,
  MessageSquare,
  Clock,
  Calendar,
  Monitor,
  Bell,
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
import { generatePageMetadata } from "@/lib/seo";
import {
  streamSchedule,
  streamTopics,
  streamFeatures,
  streamPlatform,
} from "@/data/streams";
import { pricingTiers, disclaimer } from "@/data/pricing";

export const metadata: Metadata = generatePageMetadata({
  title: "Livestreams - Watch Along During Live Trading",
  description:
    "Live crypto trading streams with Smart Money Concepts. Real-time market analysis, trade execution and interactive Q&A sessions.",
  path: "/streams",
});

const streamTier = pricingTiers.find((tier) => tier.id === "streams")!;

const iconMap = {
  MessageSquare,
  Video,
  Monitor,
  Bell,
};

export default function StreamsPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Live Trading
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Livestreams</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch along during real trading sessions and learn how Smart Money
              Concepts are applied in real-time. Interactive, educational and
              affordable.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {streamFeatures.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={feature.feature}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Weekly Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {streamSchedule.map((stream) => (
                <Card key={stream.id} className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{stream.type}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {stream.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{stream.day}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {stream.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">{stream.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {stream.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              What do we cover in the streams?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {streamTopics.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.topics.map((topic) => (
                      <div key={topic} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Video className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Platform & Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    Platform: {streamPlatform.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {streamPlatform.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Technical Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {streamPlatform.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground bg-muted p-3 rounded">
                  <strong>Access:</strong> {streamPlatform.accessNote}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>How does it work?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Subscribe",
                      description: "Choose monthly streams subscription",
                    },
                    {
                      step: "2",
                      title: "Receive access",
                      description: "Get private YouTube link via email",
                    },
                    {
                      step: "3",
                      title: "Join live streams",
                      description: "Watch along and chat during live sessions",
                    },
                    {
                      step: "4",
                      title: "Watch back",
                      description: "Access to all stream recordings",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-primary/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{streamTier.name}</CardTitle>
                <CardDescription>{streamTier.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary pt-4">
                  {streamTier.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">
                  {streamTier.description}
                </p>
                <div className="space-y-3 mb-6">
                  {streamTier.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <CTABanner
                  title=""
                  description=""
                  primaryText={streamTier.cta}
                  secondaryText="Plan intake"
                  className="!py-0 !bg-primary"
                />
              </CardContent>
            </Card>
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
        title="Start with livestreams"
        description="Lowest barrier to get acquainted with my approach and SMC concepts in practice."
        primaryText="Start streams subscription"
        secondaryText="Schedule intake first"
      />
    </>
  );
}
