import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";

interface PricingCardProps {
  primaryText: string;
  secondaryText?: string;
  className?: string;
}

export function PricingCard({
  primaryText,
  secondaryText = "Plan intake",
  className = "",
}: PricingCardProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Primary CTA Button */}
      <Button asChild size="lg" className="w-full">
        <Link
          href={siteConfig.contact.calendlyUrl}
          className="flex items-center justify-center space-x-2"
        >
          <Calendar className="w-4 h-4" />
          <span>{primaryText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>

      {/* Secondary Button */}
      {secondaryText && (
        <Button asChild variant="outline" size="lg" className="w-full">
          <Link
            href={siteConfig.contact.calendlyUrl}
            className="flex items-center justify-center space-x-2"
          >
            <span>{secondaryText}</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
