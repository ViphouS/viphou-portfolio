import ProjectCard from '@/components/ProjectCard'

function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={
        isOpenToWork
          ? 'inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-green-700'
          : 'inline-block rounded-full bg-gray-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-gray-600'
      }
    >
      {isOpenToWork ? 'Open to work' : 'Busy learning'}
    </span>
  )
}

function Section({ title, children }) {
  return (
    <section className="rounded-lg border border-gray-200 p-6 transition hover:border-gray-300">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  )
}

function SkillItem({ label, level }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0">
      <span className="text-gray-700">{label}</span>
      <span className="text-sm text-gray-500">{level}</span>
    </div>
  )
}

function App() {
  return (
    <div className="mx-auto max-w-4xl p-4 md:p-8">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">Viphou</h1>
        <p className="mt-2 text-gray-700">
          Goal: learn React fundamentals and build real projects.
        </p>
        <div className="mt-4">
          <StatusBadge isOpenToWork={false} />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <main className="md:col-span-2">
          <Section title="About">
            <p className="text-gray-700">
              I'm learning React by building small projects and practicing
              core concepts like JSX, props, and component composition.
            </p>
          </Section>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProjectCard
              title="Developer Portfolio"
              description="A profile page built with Vite, React, and hand-written JSX to practice core rules."
              status="Live"
              projectUrl="https://github.com/ViphouS/viphou-portfolio"
            />
            <ProjectCard
              title="Tailwind Redesign"
              description="Restyled the portfolio with Tailwind's spacing scale, responsive grid, and shadcn/ui components."
              status="In progress"
              projectUrl="https://github.com/ViphouS/viphou-portfolio"
            />
          </div>
        </main>

        <aside className="md:col-span-1">
          <Section title="Skills">
            <SkillItem label="HTML & CSS" level="Intermediate" />
            <SkillItem label="JavaScript" level="Intermediate" />
            <SkillItem label="React" level="Learning" />
          </Section>
          <a
            href="mailto:viphousarun@gmail.com"
            className="mt-4 block rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            Contact me
          </a>
        </aside>
      </div>
    </div>
  )
}

export default App
