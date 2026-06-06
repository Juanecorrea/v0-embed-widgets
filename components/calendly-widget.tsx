"use client"

import { useEffect, useRef } from "react"

export function CalendlyWidget({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full overflow-hidden rounded-lg border border-border"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  )
}
