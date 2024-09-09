import PropTypes from 'prop-types'
import { Link } from 'wouter'

function JobCard({
  id,
  logo,
  company,
  postedAt,
  contract,
  position,
  location,
  logoBackground,
}) {
  return (
    <article className="dark:bg-primary-300 rounded-md bg-white px-8 pb-8 pt-12">
      <div
        className="absolute left-8 top-0 h-[50px] w-[50px] rounded-2xl"
        style={{ backgroundColor: logoBackground }}>
        <div className="relative flex h-full w-full items-center justify-center">
          <img className="block" src={logo} alt={company} />
        </div>
      </div>

      <header className="mb-11">
        <div className="text-secondary-300 mb-3 flex items-center justify-start gap-x-3">
          <span className="text-body-100 capitalize">{postedAt}</span>
          <span>&#x2022;</span>
          <span className="text-body-100 capitalize">{contract}</span>
        </div>
        <div className="text-primary-300 dark:text-white">
          <h2 className="text-heading-300 mb-4 font-bold">
            <Link href={`/job/${id}`}>{position}</Link>
          </h2>

          <span className="text-body-100 text-secondary-300 capitalize">
            {company}
          </span>
        </div>
      </header>

      <footer>
        <span className="text-heading-400 text-primary-100 font-bold">
          {location}
        </span>
      </footer>
    </article>
  )
}

JobCard.propTypes = {
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  logoBackground: PropTypes.string.isRequired,
}

export default JobCard
