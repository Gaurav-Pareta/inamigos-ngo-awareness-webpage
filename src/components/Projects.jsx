import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, MessageCircle, Eye } from 'lucide-react'
import { projects } from '../data/content'
import SafeImage from './SafeImage'

export default function Projects() {
  const [active, setActive] = useState(projects[0])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-gray-950" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Our Initiatives
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50 sm:text-4xl">
            Ongoing Projects
          </h2>
          <p className="mt-4 text-muted">
            Six pillars of impact — from classrooms to forests, from kitchens to careers.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active.id === p.id
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-brand-50 dark:bg-gray-800 text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-gray-700'
              }`}
            >
              {p.name.replace('Project ', '')}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 lg:grid-cols-2 items-center rounded-3xl bg-gradient-to-br from-brand-50/80 to-white dark:from-gray-900 dark:to-gray-900 p-6 sm:p-10 border border-brand-100 dark:border-gray-800 shadow-xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <SafeImage
                src={active.image}
                alt={active.name}
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-lg bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                {active.tagline}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-600 sm:text-3xl">
                {active.name}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">{active.purpose}</p>
              <div className="mt-4 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 border border-brand-200 dark:border-brand-800 p-4">
                <p className="text-sm font-semibold text-brand-800 dark:text-brand-200">
                  Social Impact
                </p>
                <p className="mt-1 text-sm text-brand-700 dark:text-brand-300">{active.impact}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white dark:bg-gray-800 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#join"
                className="mt-6 inline-block rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                Support this project
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="card-lift group"
            >
              <SafeImage
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-brand-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {project.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />0
                </span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {project.views.toLocaleString()} Views
                </span>
              </div>
              <h4 className="mt-2 font-display font-bold text-brand-600 line-clamp-1 group-hover:text-brand-500 transition-colors">
                {project.name}: {project.tagline}
              </h4>
              <p className="mt-2 text-sm text-ink/80 dark:text-gray-400 line-clamp-3">
                {project.purpose}
              </p>
              <button
                type="button"
                onClick={() => setActive(project)}
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
