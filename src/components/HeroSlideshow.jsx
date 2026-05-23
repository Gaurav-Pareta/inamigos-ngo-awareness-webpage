import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/content'
import SafeImage from './SafeImage'

const INTERVAL_MS = 4500

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = heroSlides.length

  const goTo = useCallback(
    (next) => {
      setIndex((i) => (next < 0 ? total - 1 : next >= total ? 0 : next))
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || total <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, total])

  const slide = heroSlides[index]

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 ring-4 ring-white/50 dark:ring-gray-800/50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full bg-brand-100 dark:bg-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <SafeImage
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-brand-900/10 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
          <motion.div
            key={`caption-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <p className="font-display text-lg sm:text-xl font-bold text-white drop-shadow">
              {slide.title}
            </p>
            <p className="mt-0.5 text-sm text-brand-100/95 drop-shadow">{slide.subtitle}</p>
          </motion.div>
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/90 p-2 text-brand-700 dark:text-brand-300 shadow-lg opacity-0 hover:opacity-100 focus:opacity-100 group-hover:opacity-100 transition-opacity sm:opacity-80 sm:hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/90 p-2 text-brand-700 dark:text-brand-300 shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 px-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="absolute top-3 right-3 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-white">
        {index + 1} / {total}
      </div>
    </div>
  )
}
