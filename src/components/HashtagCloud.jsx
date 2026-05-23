import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Hash } from 'lucide-react'
import { hashtags } from '../data/content'

export default function HashtagCloud() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      className="py-16 border-y border-brand-100 dark:border-gray-800 bg-gradient-to-r from-brand-50 to-white dark:from-gray-900 dark:to-gray-950"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg">
            <Hash className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900 dark:text-brand-50">
              Join the Conversation
            </h2>
            <p className="text-muted text-sm mt-1">
              Track our campaigns, volunteer stories, and project updates across social media.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {hashtags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              className="cursor-default rounded-full border border-brand-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-brand-600 dark:text-brand-400 shadow-sm hover:bg-brand-500 hover:text-white hover:border-brand-500 dark:hover:bg-brand-500 dark:hover:text-white transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
