import {
  Recycle,
  Leaf,
  ArrowRight,
  FolderOpen,
  FileCheck2,
  Sparkles,
  BookOpen,
  Award,
  RotateCw,
  Cpu,
  Layers,
  Flame,
} from 'lucide-react'
import type { Assignment } from './lib'
import { APP_NAME, TAGLINE, HERO_HEADING, HERO_SUB } from './config'
import { primary, ghost } from './styles'

interface HomePageProps {
  items: Assignment[]
  onNavAbout: () => void
  onNavSubmissions: () => void
}

export default function HomePage({ items, onNavAbout, onNavSubmissions }: HomePageProps) {
  // Dynamically calculate unique assignment counts from centralized assignment data
  const totalSubmissions = items.length
  const isaCount = items.filter((a) => a.category === 'ISA').length
  const eseCount = items.filter((a) => a.category === 'ESE').length
  const extrasCount = items.filter((a) => a.category === 'Extras').length

  return (
    <div className="rise">
      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-gradient pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 transition-colors duration-300">
        {/* Decorative ambient background glows */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Semester Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/15 px-4 py-1.5 text-xs font-semibold text-emerald backdrop-blur-md shadow-sm">
                <Sparkles size={14} className="text-lime" />
                <span>E-Waste &amp; Environmental Management · Semester V</span>
              </div>

              {/* Main Heading — Exploring a Greener Tomorrow. */}
              <h1 className="font-display text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl tracking-tight">
                {HERO_HEADING}
              </h1>

              {/* Supporting Description */}
              <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
                {HERO_SUB}
              </p>

              {/* Tagline */}
              <div className="flex items-center gap-2 text-sm font-medium text-emerald/90">
                <Leaf size={16} className="text-lime flex-shrink-0" />
                <span className="italic tracking-wide">"{TAGLINE}"</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onNavSubmissions}
                  className={`${primary} !px-7 !py-3.5 !text-base font-semibold shadow-lg shadow-emerald/25 hover:shadow-emerald/40 gap-2 group`}
                >
                  View Submissions{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
                <button
                  onClick={onNavAbout}
                  className={`${ghost} !border-white/25 !bg-white/10 !text-white hover:!bg-white/20 !px-7 !py-3.5 !text-base font-medium backdrop-blur-sm`}
                >
                  About Me &amp; Course
                </button>
              </div>
            </div>

            {/* Right Hero Circular Economy Visual (Desktop & Mobile Responsive) */}
            <div className="lg:col-span-5 flex justify-center py-4 lg:py-0">
              <CircularEconomyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Dedicated Statistics Cards ────────────────────────── */}
      <section className="relative -mt-10 z-20 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Card 1: Total Submissions */}
          <StatCard
            icon={FolderOpen}
            count={totalSubmissions}
            label="Total Submissions"
            sub="Complete semester portfolio"
            accent="border-emerald/30 hover:border-emerald"
            badgeBg="bg-emerald/15 text-emerald"
            numberColor="text-forest dark:text-emerald"
          />

          {/* Card 2: ISA Activities */}
          <StatCard
            icon={FileCheck2}
            count={isaCount}
            label="ISA Activities"
            sub="Internal assessments & trackers"
            accent="border-blue-500/30 hover:border-blue-500"
            badgeBg="bg-blue-500/15 text-blue-600 dark:text-blue-400"
            numberColor="text-forest dark:text-white"
          />

          {/* Card 3: ESE Activities */}
          <StatCard
            icon={Award}
            count={eseCount}
            label="ESE Activities"
            sub="End-sem studies, campaigns & audits"
            accent="border-purple-500/30 hover:border-purple-500"
            badgeBg="bg-purple-500/15 text-purple-600 dark:text-purple-400"
            numberColor="text-forest dark:text-white"
          />

          {/* Card 4: Extras */}
          <StatCard
            icon={BookOpen}
            count={extrasCount}
            label="Extras"
            sub="10 case studies report & research paper"
            accent="border-amber-500/30 hover:border-amber-500"
            badgeBg="bg-amber-500/15 text-amber-600 dark:text-amber-400"
            numberColor="text-forest dark:text-white"
          />
        </div>
      </section>

      {/* ── Portfolio Introduction ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald/10 dark:bg-emerald/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
              <Leaf size={13} /> Portfolio Introduction
            </span>
            <h2 className="font-display text-3xl font-bold text-forest dark:text-white md:text-4xl leading-tight">
              A comprehensive showcase of academic sustainability research
            </h2>
            <p className="leading-relaxed text-forest/75 dark:text-white/70">
              Welcome to <strong>{APP_NAME}</strong>, the centralized academic portfolio of <strong>Dakshata Mhatre</strong> for <em>E-Waste and Environmental Management</em> (Semester V, Computer Engineering, Vidyalankar Institute of Technology).
            </p>
            <p className="leading-relaxed text-forest/75 dark:text-white/70">
              This portfolio synthesises theoretical frameworks with practical environmental analysis: from state-level monitoring models (Rajasthan E-Waste Tracker) and hydrometallurgical recovery optimizations to nationwide corporate compliance reviews and international WEEE directives.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onNavSubmissions}
                className={`${primary} !px-6 !py-3`}
              >
                Browse All Submissions <ArrowRight size={16} />
              </button>
              <button onClick={onNavAbout} className={ghost}>
                View Student Profile
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            <FeatureCard
              emoji="📊"
              title="State E-Waste Tracking"
              desc="Multi-tab Excel model and diagnostic report tracking generation, collection and recycling across Rajasthan."
            />
            <FeatureCard
              emoji="🔬"
              title="Hydrometallurgy Recovery"
              desc="Three-part research on chemical leaching circuits and workflow modifications for metal extraction."
            />
            <FeatureCard
              emoji="🏢"
              title="LEED Green Buildings"
              desc="Detailed factor scoring spreadsheet and 10 Indian green commercial buildings benchmarked against LEED criteria."
            />
            <FeatureCard
              emoji="🌍"
              title="Global Policy & Rules"
              desc="Comparative regulatory study across 5 European countries and India's E-Waste (Management) Rules 2022."
            />
          </div>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 dark:border-white/10 bg-gradient-to-r from-forest via-pine to-forest py-16 px-4 text-center text-white relative overflow-hidden">
        <Recycle
          className="spin-slow pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-emerald/10"
          strokeWidth={0.75}
        />
        <div className="relative mx-auto max-w-2xl space-y-4">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald/20 border border-emerald/30 text-emerald mb-2">
            <Leaf size={24} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Explore All 14 Course Submissions
          </h2>
          <p className="text-white/75 text-sm md:text-base leading-relaxed">
            Download original documents, view spreadsheets, inspect presentation slides, or review case studies directly in your browser.
          </p>
          <div className="pt-3">
            <button
              onClick={onNavSubmissions}
              className={`${primary} !px-8 !py-3.5 !text-base font-semibold shadow-lg shadow-emerald/30`}
            >
              Go to View Submissions <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Original Circular Economy Visual ────────────────────────────── */

function CircularEconomyVisual() {
  const pillars = [
    {
      step: '01',
      title: 'Design',
      sub: 'Eco-Design & Modularity',
      icon: Cpu,
      color: 'text-emerald',
      bg: 'bg-emerald/15 border-emerald/30',
      pos: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
      step: '02',
      title: 'Reuse',
      sub: 'Refurbish & Extend Life',
      icon: RotateCw,
      color: 'text-lime',
      bg: 'bg-lime/15 border-lime/30',
      pos: 'top-1/2 right-0 -translate-y-1/2 translate-x-2 sm:translate-x-4',
    },
    {
      step: '03',
      title: 'Recycle',
      sub: 'Urban Mining & Closed Loop',
      icon: Recycle,
      color: 'text-teal-300',
      bg: 'bg-teal-400/15 border-teal-400/30',
      pos: 'bottom-0 left-1/2 -translate-x-1/2',
    },
    {
      step: '04',
      title: 'Recovery',
      sub: 'Hydrometallurgy & Energy',
      icon: Flame,
      color: 'text-amber-300',
      bg: 'bg-amber-400/15 border-amber-400/30',
      pos: 'top-1/2 left-0 -translate-y-1/2 -translate-x-2 sm:-translate-x-4',
    },
  ]

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square select-none p-4">
      {/* Background radial glow */}
      <div className="absolute inset-4 rounded-full bg-emerald/10 blur-2xl" />

      {/* SVG Connecting Flow Lines & Clockwise Arrowheads */}
      <svg
        viewBox="0 0 360 360"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#a3e635" stopOpacity="0.8" />
            <stop offset="66%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
          </linearGradient>
          <marker
            id="flowArrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
          </marker>
        </defs>

        {/* Circular Orbital Track */}
        <circle
          cx="180"
          cy="180"
          r="120"
          fill="none"
          stroke="url(#circGrad)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          className="spin-slow"
          style={{ animationDuration: '70s' }}
        />

        {/* Outer subtle concentric guide */}
        <circle
          cx="180"
          cy="180"
          r="145"
          fill="none"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="4 10"
          opacity="0.25"
        />
      </svg>

      {/* Center Core Badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative grid h-24 w-24 sm:h-28 sm:w-28 place-items-center rounded-3xl bg-gradient-to-br from-forest/90 via-pine/90 to-forest/90 border border-emerald/40 shadow-2xl backdrop-blur-md">
          <Recycle size={42} className="text-emerald spin-slow" style={{ animationDuration: '30s' }} />
          <div className="absolute -bottom-2.5 rounded-full bg-forest border border-emerald/40 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald shadow-md">
            Circular
          </div>
        </div>
      </div>

      {/* 4 Pillars Positioned Around Cycle */}
      {pillars.map((p) => {
        const Icon = p.icon
        return (
          <div
            key={p.title}
            className={`absolute ${p.pos} flex flex-col items-center z-10 transition-transform duration-300 hover:scale-105`}
          >
            <div
              className={`flex items-center gap-2 rounded-2xl border ${p.bg} bg-forest/90 dark:bg-dark-card/90 px-3 py-1.5 shadow-lg backdrop-blur-md`}
            >
              <span className={`grid h-7 w-7 place-items-center rounded-xl bg-white/10 ${p.color}`}>
                <Icon size={16} />
              </span>
              <div className="text-left">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-[9px] font-mono text-white/50">{p.step}</span>
                  <span className="text-xs font-bold text-white tracking-tight">{p.title}</span>
                </div>
                <p className="text-[10px] text-white/60 leading-none mt-0.5 hidden sm:block">
                  {p.sub}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ── Statistics Card ─────────────────────────────────────────────── */

interface StatCardProps {
  icon: any
  count: number
  label: string
  sub: string
  accent: string
  badgeBg: string
  numberColor: string
}

function StatCard({ icon: Icon, count, label, sub, accent, badgeBg, numberColor }: StatCardProps) {
  return (
    <div
      className={`group rounded-3xl bg-white dark:bg-dark-card border border-forest/10 dark:border-dark-border p-5 md:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${accent}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-2xl ${badgeBg} transition-transform group-hover:scale-110 duration-200`}
        >
          <Icon size={22} />
        </span>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-forest/5 dark:bg-white/5 text-forest/60 dark:text-white/50">
          Verified
        </span>
      </div>
      <p className={`font-display text-3xl md:text-4xl font-bold leading-none ${numberColor}`}>
        {count}
      </p>
      <h3 className="mt-2 text-sm md:text-base font-bold text-forest dark:text-white">
        {label}
      </h3>
      <p className="mt-1 text-xs text-forest/55 dark:text-white/45 leading-relaxed line-clamp-1">
        {sub}
      </p>
    </div>
  )
}

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-forest/10 dark:border-dark-border bg-white dark:bg-dark-card p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <span className="text-3xl block mb-2">{emoji}</span>
      <h3 className="font-display text-base font-bold text-forest dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-xs text-forest/65 dark:text-white/60 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
