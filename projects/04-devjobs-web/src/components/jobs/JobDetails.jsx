/* eslint-disable react/prop-types */

function JobDetailHeader({ logo, logoBackground, company }) {
  return (
    <header className="flex w-full items-center overflow-hidden rounded-md bg-white dark:bg-primary-300">
      <div
        className="flex aspect-square w-full max-w-36 items-center justify-center"
        style={{ backgroundColor: logoBackground }}>
        <img
          className="block w-full max-w-24 object-contain"
          src={`../${logo}`}
          alt={company}
        />
      </div>

      <div className="flex flex-grow items-center justify-between px-10 py-8">
        <div>
          <span className="text-heading-200 font-bold text-primary-300 dark:text-white">
            {company}
          </span>
        </div>

        <a
          href=""
          className="w-full max-w-fit rounded-md bg-primary-100/10 px-5 py-3 dark:bg-white/10">
          <span className="whitespace-nowrap text-base font-bold capitalize text-primary-100 dark:text-white">
            Company site
          </span>
        </a>
      </div>
    </header>
  )
}

function JobDetailFooter({ position, company }) {
  return (
    <footer className="relative mt-12 bg-primary-300 before:absolute before:bottom-0 before:left-full before:top-0 before:h-full before:w-full before:bg-primary-300 after:absolute after:bottom-0 after:right-full after:top-0 after:h-full after:w-full after:bg-primary-300">
      <div className="flex items-center justify-between gap-x-8 px-5 py-6">
        <div className="text-primary-300 dark:text-white">
          <h1 className="mb-3 text-heading-300 font-bold">{position}</h1>

          <span className="text-base text-secondary-300">{company}</span>
        </div>

        <a
          href="#"
          className="w-full max-w-fit rounded-md bg-primary-100 px-5 py-3">
          <span className="whitespace-nowrap text-base font-bold capitalize text-white">
            Apply Now
          </span>
        </a>
      </div>
    </footer>
  )
}

function JobDetailRequirements({ id, requirements }) {
  return (
    <div>
      <h2 className="mb-6 text-heading-300 font-bold text-primary-300 dark:text-white">
        Requirements
      </h2>

      <div className="mb-6 text-left text-body-100 text-secondary-300 dark:text-secondary-200">
        <p>{requirements?.content}</p>
      </div>

      <ul className="list-disc">
        {requirements.items?.map((item, index) => {
          return (
            <li
              key={index + id}
              className="mb-2 inline-flex w-full max-w-full items-start justify-start gap-x-8 whitespace-normal text-body-100 text-secondary-300 last:mb-0 dark:text-secondary-200">
              <span className="h-1 w-1 min-w-1 translate-y-2 rounded-full bg-primary-100 text-body-100"></span>
              <div>
                <p>{item}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function JobDetailRole({ id, role }) {
  return (
    <div>
      <h2 className="mb-6 text-heading-300 font-bold text-primary-300 dark:text-white">
        What You Will Do
      </h2>

      <div className="mb-6 text-left text-body-100 text-secondary-300 dark:text-secondary-200">
        <p>{role?.content}</p>
      </div>

      <ul className="list-disc">
        {role.items?.map((item, index) => {
          return (
            <li
              key={index + id}
              className="mb-2 inline-flex w-full max-w-full items-start justify-start text-body-100 text-secondary-300 last:mb-0 dark:text-secondary-200">
              <span className="mr-8 text-body-100 font-bold text-primary-100">
                {index + 1}
              </span>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function JobDetailInfo({
  postedAt,
  contract,
  position,
  location,
  description,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-y-11">
      <div className="flex-grow">
        <div className="mb-2 flex items-center justify-start gap-x-3 text-secondary-300 dark:text-secondary-200">
          <span className="text-body-100 capitalize">{postedAt}</span>
          <span>&#x2022;</span>
          <span className="text-body-100 capitalize">{contract}</span>
        </div>

        <div className="text-primary-300 dark:text-white">
          <h1 className="mb-3 text-heading-100 font-bold">{position}</h1>

          <span className="text-heading-400 font-bold text-primary-100">
            {location}
          </span>
        </div>
      </div>

      <a
        href="#"
        className="w-full max-w-fit rounded-md bg-primary-100 px-5 py-3 lg:px-10">
        <span className="whitespace-nowrap text-base font-bold capitalize text-white">
          Apply Now
        </span>
      </a>

      <div className="flex-auto text-left text-body-100 text-secondary-300 dark:text-secondary-200">
        <p>{description}</p>
      </div>
    </div>
  )
}

function JobDetail({ job }) {
  const {
    id,
    logo,
    company,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    description,
    requirements,
    role,
  } = job

  return (
    <article
      className="relative mx-auto flex max-w-3xl flex-col gap-y-8"
      data-job={id}>
      <JobDetailHeader
        logo={logo}
        logoBackground={logoBackground}
        company={company}
      />

      <div className="flex flex-col gap-y-12 rounded-md bg-white p-12 dark:bg-primary-300">
        <JobDetailInfo
          position={position}
          postedAt={postedAt}
          contract={contract}
          location={location}
          description={description}
        />

        {requirements != null && (
          <JobDetailRequirements id={id} requirements={requirements} />
        )}

        {role != null && <JobDetailRole id={id} role={role} />}
      </div>

      <JobDetailFooter position={position} company={company} />
    </article>
  )
}

// JobDetail.propTypes = {
//   job: PropTypes.object,
// }

export default JobDetail
