import { PropTypes } from 'prop-types'

function MainLayout({ children }) {
  return (
    <main className="relative">
      <div className="container-layout">{children}</div>
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
