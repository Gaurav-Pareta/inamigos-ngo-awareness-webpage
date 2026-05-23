import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { credentials } from '../data/content'
import SafeImage from './SafeImage'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Get to Know Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50 sm:text-4xl">
            InAmigos Foundation
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Founded on September 23, 2020 by Mr. Govind Shukla, InAmigos is a Section 8
            registered non-profit licensed by the Central Government. Based in Chhattisgarh,
            we operate across India with a network of dedicated professionals, volunteers, and
            corporate partners — bringing measurable change through transparent, accountable
            operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {[
              {
                icon: Calendar,
                title: 'Our Origin',
                text: 'Born from a vision of collective action — every contribution fuels food distribution, education, empowerment, animal welfare, and environmental programs nationwide.',
              },
              {
                icon: MapPin,
                title: 'Headquarters',
                text: 'Bilaspur, Chhattisgarh — serving communities across India with local roots and national reach.',
              },
              {
                icon: Award,
                title: 'Quality Commitment',
                text: 'IAF ISO 9001:2015 certified — maintaining high standards in operations and service delivery for every initiative we run.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white dark:bg-gray-900 p-5 shadow-md border border-brand-50 dark:border-gray-800"
              >
                <Icon className="h-6 w-6 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-brand-800 dark:text-brand-200">
                    {title}
                  </h3>
                  <p className="text-muted text-sm mt-1">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="rounded-3xl bg-gradient-to-br from-brand-50 to-white dark:from-gray-900 dark:to-gray-900 p-8 border border-brand-100 dark:border-gray-800 shadow-lg"
          >
            <h3 className="font-display text-xl font-bold text-brand-800 dark:text-brand-200 mb-6">
              Credentials & Recognitions
            </h3>
            <ul className="space-y-4">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 text-ink/90 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl overflow-hidden">
              <SafeImage
                src="https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg"
                alt="Community volunteers collaborating"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
