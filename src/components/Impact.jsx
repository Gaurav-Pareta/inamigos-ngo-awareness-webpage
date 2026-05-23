import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Utensils, GraduationCap, PawPrint, Users, TreePine, Briefcase } from 'lucide-react'

const impacts = [
  {
    icon: Utensils,
    title: 'Project Seva',
    stat: '50,000+',
    desc: 'Meals and clothing reaching families who need dignity and nourishment most.',
    color: 'from-orange-400 to-amber-500',
  },
  {
    icon: GraduationCap,
    title: 'Bachpanshala',
    stat: '1000s',
    desc: 'Children gaining digital literacy, life skills, and consistent school support.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: PawPrint,
    title: 'Project Jeev',
    stat: '50+/day',
    desc: 'Stray animals fed and cared for through our dedicated volunteer network.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'Project Udaan',
    stat: 'Rural SHGs',
    desc: 'Women empowered with skills, hygiene awareness, and financial independence.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: TreePine,
    title: 'Project Prakriti',
    stat: '20,000+',
    desc: 'Saplings planted and sustainable agriculture practices promoted nationwide.',
    color: 'from-emerald-400 to-green-600',
  },
  {
    icon: Briefcase,
    title: 'Project Vikas',
    stat: '30,000+',
    desc: 'Interns trained across data, finance, marketing, research, and social work.',
    color: 'from-violet-400 to-purple-600',
  },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="impact" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-brand-900 via-brand-800 to-brand-900" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Measurable Change
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Social Impact & Purpose
          </h2>
          <p className="mt-4 text-brand-100/90">
            Every initiative is designed for real outcomes — transparent operations, strong
            partnerships, and stories that inspire more people to join.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-brand-300">{item.stat}</p>
              <h3 className="mt-1 font-display font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-100/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-xl sm:text-2xl font-medium text-white italic leading-relaxed">
            &ldquo;At InAmigos Foundation, we believe in the power of collective action. Every
            contribution strengthens our mission to build a more inclusive, compassionate, and
            empowered society.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
