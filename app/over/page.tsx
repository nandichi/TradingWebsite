import { Metadata } from "next";
import { User, Award, Target, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";
import { generatePageMetadata } from "@/lib/seo";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = generatePageMetadata({
  title: "About Aaron Haden",
  description:
    "Learn more about Aaron Haden, crypto trading mentor specialized in Smart Money Concepts. Experience, philosophy and approach.",
  path: "/over",
});

export default function OverPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Aaron Haden
            </h1>
            <p className="text-xl text-muted-foreground">
              From traditional analysis to Smart Money Concepts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <Image
                  src="/aaron-haden.jpg"
                  alt="Aaron Haden - Crypto Trading Mentor"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">My story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in the crypto world started 5 years ago with
                  traditional technical analysis. After years of inconsistent
                  results and frustration, I discovered Smart Money Concepts -
                  an approach that views the market from the perspective of
                  institutional traders.
                </p>
                <p>
                  This shift in mindset changed everything. Suddenly I began to
                  understand the market like the 'big players' do. Liquidity
                  grabs, order blocks, fair value gaps - concepts that helped me
                  become consistently profitable.
                </p>
                <p>
                  Now I help others make the same transformation. Not through
                  false promises of quick wealth, but through solid education,
                  strong risk management and a realistic approach to trading.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  5+ years experience in crypto trading with focus on Smart
                  Money Concepts. 200+ students successfully guided to
                  consistent trading.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Structured curriculum with focus on risk management. No
                  shortcuts, but a solid foundation for long-term success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trading is 80% psychology and 20% technique. I teach you not
                  only how to win, but especially how to prevent losses.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Approach */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">My approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">What I DO:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Solid SMC education from institutional perspective</li>
                  <li>• Focus on risk management and capital preservation</li>
                  <li>• Setting realistic expectations and goals</li>
                  <li>• Personal guidance and feedback</li>
                  <li>• Community support and accountability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">What I DON'T do:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Promises of guaranteed profits</li>
                  <li>• "Get rich quick" schemes</li>
                  <li>• Emotionally manipulative marketing</li>
                  <li>• Unrealistic income claims</li>
                  <li>• Selling trading signals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to work together?"
        description="Book a free intake call and discover how my approach can help you become consistently profitable."
      />
    </>
  );
}
