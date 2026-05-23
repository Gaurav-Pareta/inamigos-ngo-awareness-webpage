import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { contact } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-20 bg-brand-50/50 dark:bg-gray-900/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              Contact Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-muted">
              Have questions about our projects, volunteering, or CSR partnerships? We&apos;d
              love to hear from you.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800 dark:text-brand-200">Address</p>
                  <p className="text-sm text-muted mt-0.5">{contact.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800 dark:text-brand-200">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-brand-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800 dark:text-brand-200">Phone</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-sm text-brand-600 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-3xl overflow-hidden shadow-xl h-80 lg:h-96"
          >
            <iframe
              title="InAmigos Foundation location — Bilaspur, Chhattisgarh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d82.15!3d22.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA0JzQ4LjAiTiA4MsKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
