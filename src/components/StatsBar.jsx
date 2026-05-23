import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, suffix, label, inView }) {
  const count = useCountUp(value, 2200, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-center px-4"
    >
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-brand-100/90 max-w-[180px] mx-auto">{label}</p>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView])

  return (
    <section ref={ref} className="relative -mt-8 z-10 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 p-8 shadow-2xl shadow-brand-500/30 sm:p-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} inView={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
