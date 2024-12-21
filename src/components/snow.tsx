"use client"

import { useEffect, useState } from "react"
import { Snowfall } from "react-snowfall"

export const Snow = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null
  
  return (
    <div className="fixed inset-0 w-full h-full z-[9999999999] pointer-events-none">
      <Snowfall snowflakeCount={80} />
    </div>
  )
}