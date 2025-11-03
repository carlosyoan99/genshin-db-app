import { useState } from 'react'

export const useCache = <T>(key: string, initialValue: T, ttl: number = 5 * 60 * 1000) => {
  const [data, setData] = useState<T>(() => {
    const cached = localStorage.getItem(key)
    if (cached) {
      const { value, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < ttl) {
        return value
      }
    }
    return initialValue
  })

  const setCache = (value: T) => {
    setData(value)
    localStorage.setItem(key, JSON.stringify({
      value,
      timestamp: Date.now()
    }))
  }

  return [data, setCache] as const
}