import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-brand-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Heart className="h-5 w-5 fill-current" />
            </span>
            <div>
              <p className="font-display font-bold text-white text-lg">InAmigos Foundation</p>
              <p className="text-xs text-brand-300">Section 8 Non-Profit · Est. 2020</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#impact" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#join" className="hover:text-white transition-colors">
              Join Us
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-800 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-brand-400">
          <p>© {year} InAmigos Foundation. All rights reserved.</p>
          <p>
            Built with purpose · <span className="text-brand-300">#InAmigos</span> ·{' '}
            <span className="text-brand-300">#CollectiveAction</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
