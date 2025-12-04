"use client"

import { Button } from "@/components/ui/button"

const CallButton = () => {
  return (
    <Button asChild className="text-white" aria-label="Call SacArea History Consortium">
      <a href="tel:+19167949078">Contact Us</a>
    </Button>
  )
}

export default CallButton
