import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Aaron Haden",
  description:
    "Learn more about Aaron Haden, crypto trading mentor specialized in Smart Money Concepts. Experience, philosophy and approach.",
  path: "/over",
});

export default function OverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
