"use client"

import { Button } from "@/components/ui/button"

const CONTACT_NUMBER = "+19167949078"
const CONTACT_EMAIL = "sacarea@winfirst.com"

const CallButton = () => {
  const handleContact = () => {
    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android|iP(hone|ad)|IEMobile|BlackBerry|Opera Mini/i.test(
        window.navigator.userAgent
      )

    if (isMobile) {
      window.location.href = `tel:${CONTACT_NUMBER}`
      return
    }

    window.location.href = `mailto:${CONTACT_EMAIL}`
  }

  return (
    <Button
      type="button"
      className="text-white"
      aria-label="Call or email SacArea History Consortium"
      onClick={handleContact}
    >
      Contact Us
    </Button>
  )
}

export default CallButton
