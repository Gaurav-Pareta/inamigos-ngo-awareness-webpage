import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, HandHeart, Building2, Send } from 'lucide-react'

const options = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    desc: 'Join our network of professionals and volunteers making change on the ground.',
    cta: 'Become a Volunteer',
  },
  {
    icon: Heart,
    title: 'Donate & Support',
    desc: '80G & 12A certified — your contribution is transparent and tax-exempt eligible.',
    cta: 'Support Our Cause',
  },
  {
    icon: Building2,
    title: 'CSR Partnership',
    desc: 'CSR-1 registered — collaborate with us for impactful corporate social responsibility.',
    cta: 'Partner With Us',
  },
]

export default function JoinCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', interest: 'volunteer', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="join" className="py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Take Action
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 dark:text-brand-50 sm:text-4xl">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-muted">
            Whether through volunteering, partnerships, or donations — every contribution
            expands our reach and impact across India.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg border border-brand-50 dark:border-gray-800 text-center card-lift"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400">
                <opt.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display font-bold text-brand-800 dark:text-brand-200">
                {opt.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{opt.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-block rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                {opt.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 p-8 sm:p-10 shadow-2xl shadow-brand-500/30 text-white"
        >
          <h3 className="font-display text-xl font-bold">Get in Touch</h3>
          <p className="mt-2 text-brand-100 text-sm">
            Fill out the form and our team will reach out. No backend — this demo shows intent
            for your competition submission.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-white/20 p-6 text-center backdrop-blur">
              <p className="font-semibold text-lg">Thank you for your interest!</p>
              <p className="mt-2 text-sm text-brand-100">
                Together we can build a more inclusive society. Reach us directly at{' '}
                <a href="mailto:inamigosfoundation@gmail.com" className="underline font-medium">
                  inamigosfoundation@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-ink placeholder:text-muted/60 focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-ink placeholder:text-muted/60 focus:ring-2 focus:ring-white"
              />
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-ink focus:ring-2 focus:ring-white"
              >
                <option value="volunteer">I want to volunteer</option>
                <option value="donate">I want to donate</option>
                <option value="partner">CSR / Corporate partnership</option>
                <option value="other">General inquiry</option>
              </select>
              <textarea
                rows={3}
                placeholder="Your message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-ink placeholder:text-muted/60 focus:ring-2 focus:ring-white resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-brand-600 font-bold py-3.5 hover:bg-brand-50 transition-colors"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
