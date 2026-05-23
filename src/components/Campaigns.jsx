import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { campaigns } from '../data/content'
import SafeImage from './SafeImage'

export default function Campaigns() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="campaigns"
      className="py-20 sm:py-28 bg-brand-50/50 dark:bg-gray-900/50"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Campaigns & Events
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50 sm:text-4xl">
            Project Highlights
          </h2>
          <p className="mt-4 text-muted">
            Awareness drives and community events that amplify our mission on the ground and
            online.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {campaigns.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="card-lift bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/30 overflow-hidden flex flex-col border border-transparent dark:border-gray-800"
            >
              <div className="relative bg-brand-100 dark:bg-gray-800">
                <SafeImage
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  {card.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-sm text-brand-500 italic">
                  <Calendar className="h-4 w-4" />
                  {card.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-600 dark:text-brand-400 leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {card.hashtags.map((tag) => (
                    <span key={tag} className="text-xs text-brand-500 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-5 w-fit rounded-md bg-brand-500 px-5 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
                >
                  read more
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
