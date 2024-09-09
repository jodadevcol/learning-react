import JobFilter from './JobFilter'
import JobGrid from './JobGrid'

function Jobs() {
  return (
    <section className="jobs-section">
      <article className="-translate-y-10 pb-20">
        <header className="job-filter mb-20">
          <JobFilter />
        </header>

        <div className="job-grid">
          <JobGrid />
        </div>
      </article>
    </section>
  )
}

export default Jobs
