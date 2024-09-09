import { PropTypes } from 'prop-types'

function MainLayout({ children }) {
  return (
    <main>
      <div className="container-layout">{children}</div>
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
