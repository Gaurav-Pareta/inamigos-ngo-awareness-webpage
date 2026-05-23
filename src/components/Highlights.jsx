import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MessageCircle, Eye } from 'lucide-react'
import { highlights } from '../data/content'
import SafeImage from './SafeImage'

export default function Highlights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-gray-950" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            From Our Team
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50 sm:text-4xl">
            Stories & Content Highlights
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Campaigns, blog posts, and project updates from our content writers and field teams —
            follow <strong className="text-brand-600 dark:text-brand-400">#InAmigos</strong> for
            the latest.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 3) * 0.1 }}
              className="card-lift"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-brand-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />0 Comments
                </span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {item.views.toLocaleString()} Views
                </span>
              </div>
              <h3 className="mt-2 font-display font-bold text-brand-600 dark:text-brand-400 line-clamp-2">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink/80 dark:text-gray-400 line-clamp-3">
                {item.excerpt}
              </p>
              <button
                type="button"
                className="mt-4 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
              >
                read more
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
