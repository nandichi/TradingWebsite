"use client"

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BackButton() {
  return (
    <Button 
      variant="outline" 
      size="lg" 
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Ga Terug
    </Button>
  )
}
