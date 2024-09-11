/* eslint-disable react/prop-types */
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
      <header className="bg-primary-300 flex w-full items-center overflow-hidden rounded-md">
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
            <span className="text-heading-200 font-bold dark:text-white">
              {company}
            </span>
          </div>

          <a
            href=""
            className="w-full max-w-fit rounded-md bg-white/10 px-5 py-3">
            <span className="whitespace-nowrap text-base font-bold capitalize text-white">
              Company site
            </span>
          </a>
        </div>
      </header>

      <div className="bg-primary-300 flex flex-col gap-y-12 rounded-md p-12">
        <div className="flex flex-wrap items-center justify-between gap-y-11">
          <div className="flex-grow">
            <div className="text-secondary-300 mb-2 flex items-center justify-start gap-x-3">
              <span className="text-body-100 capitalize">{postedAt}</span>
              <span>&#x2022;</span>
              <span className="text-body-100 capitalize">{contract}</span>
            </div>

            <div className="text-primary-300 dark:text-white">
              <h1 className="text-heading-100 mb-3 font-bold">{position}</h1>

              <span className="text-heading-400 text-primary-100 font-bold">
                {location}
              </span>
            </div>
          </div>

          <a
            href="#"
            className="bg-primary-100 w-full max-w-fit rounded-md px-5 py-3">
            <span className="whitespace-nowrap text-base font-bold capitalize text-white">
              Apply Now
            </span>
          </a>

          <div className="text-body-100 text-secondary-200 flex-auto text-left">
            <p>{description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-heading-300 mb-6 font-bold text-white">
            Requirements
          </h2>

          <div className="text-body-100 text-secondary-200 mb-6 text-left">
            <p>{requirements?.content}</p>
          </div>

          <ul className="list-disc">
            {requirements.items?.map((item, index) => {
              return (
                <li
                  key={index + id}
                  className="text-body-100 text-secondary-200 mb-2 inline-flex w-full max-w-full items-center justify-start last:mb-0">
                  <span className="bg-primary-100 mr-8 h-1 w-1 rounded-full"></span>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-heading-300 mb-6 font-bold text-white">
            What You Will Do
          </h2>

          <div className="text-body-100 text-secondary-200 mb-6 text-left">
            <p>{role?.content}</p>
          </div>

          <ul className="list-disc">
            {role.items?.map((item, index) => {
              return (
                <li
                  key={index + id}
                  className="text-body-100 text-secondary-200 mb-2 inline-flex w-full max-w-full items-start justify-start last:mb-0">
                  <span className="text-primary-100 text-body-100 mr-8 font-bold">
                    {index + 1}
                  </span>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <footer></footer>
    </article>
  )
}

// JobDetail.propTypes = {
//   job: PropTypes.object,
// }

export default JobDetail
