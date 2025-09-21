"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <Button variant="outline" size="lg" onClick={handleBack}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  );
}
