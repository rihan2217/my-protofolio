import { useState, useEffect } from 'react'

export function useLightMode() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('lightMode')
    if (saved === 'enabled') return true
    if (saved === 'disabled') return false
    return window.matchMedia('(prefers-color-scheme: light)').matches
  })

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode')
      localStorage.setItem('lightMode', 'enabled')
    } else {
      document.body.classList.remove('light-mode')
      localStorage.setItem('lightMode', 'disabled')
    }
  }, [isLight])

  const toggle = () => setIsLight(prev => !prev)

  return { isLight, toggle }
}
