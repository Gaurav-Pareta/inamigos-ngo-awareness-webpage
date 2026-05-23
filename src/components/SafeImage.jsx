import { useState } from 'react'

const FALLBACK =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
      <rect fill="#d1fae5" width="800" height="480"/>
      <text x="400" y="240" text-anchor="middle" fill="#2d9f6f" font-family="sans-serif" font-size="20">InAmigos Foundation</text>
    </svg>`,
  )

export default function SafeImage({ src, alt, className, ...props }) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setCurrent(FALLBACK)}
      {...props}
    />
  )
}
