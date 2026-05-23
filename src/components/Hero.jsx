import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import HeroSlideshow from './HeroSlideshow'

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-mesh overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-brand-300/30 dark:bg-brand-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-brand-400/20 dark:bg-brand-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 dark:border-brand-800 bg-white/80 dark:bg-gray-900/80 px-4 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-500" />
            Section 8 Non-Profit · Since 23 Sept 2020
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-900 dark:text-brand-50 sm:text-5xl lg:text-6xl">
            Together We Build a{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
              Compassionate India
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            InAmigos Foundation empowers communities through education, welfare, women
            empowerment, animal care, and environmental sustainability — one initiative at
            a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-500/30 hover:bg-brand-600 transition-all hover:gap-3"
            >
              Join Our Mission
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border-2 border-brand-300 dark:border-brand-700 bg-white/80 dark:bg-gray-900/80 px-7 py-3.5 font-semibold text-brand-700 dark:text-brand-300 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-gray-800 transition-colors"
            >
              Explore Projects
            </a>
          </div>

          <p className="mt-8 text-sm text-muted">
            Follow our journey{' '}
            <span className="font-semibold text-brand-600 dark:text-brand-400">#InAmigos</span>{' '}
            <span className="font-semibold text-brand-600 dark:text-brand-400">
              #CollectiveAction
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <HeroSlideshow />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-4 -right-4 z-10 rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-xl border border-brand-100 dark:border-gray-800 hidden sm:block"
          >
            <p className="font-display text-2xl font-bold text-brand-500">6+</p>
            <p className="text-xs text-muted font-medium">Active Projects</p>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  )
}
