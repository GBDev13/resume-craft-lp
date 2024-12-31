"use client"

import { Fireworks } from "@fireworks-js/react"
import { useEffect, useState } from "react"

export const NewYearFireWorks = () => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])

  if (!start) return null
  
  return (
    <Fireworks
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      options={{
        hue: {
          min: 45,
          max: 55,
        },
        brightness: {
          min: 80,
          max: 100,
        },
        delay: {
          min: 100,
          max: 300,
        }
      }}
    />
  )
}