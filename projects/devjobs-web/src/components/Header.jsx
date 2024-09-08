import MainLogo from './MainLogo'
import ToggleTheme from './ToogleTheme'

function Header() {
  return (
    <header className="relative min-h-40">
      <div
        className="bg-primary-100 absolute inset-0 -z-10 bg-left bg-repeat-x"
        style={{ backgroundImage: 'url(./mask-header.png)' }}></div>

      <div className="container-layout flex items-start justify-between pb-6 pt-12 text-white">
        <a href="#" className="block w-full max-w-[116px] text-current">
          <h1 className="hidden">Devjobs</h1>

          <MainLogo />
        </a>

        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header
