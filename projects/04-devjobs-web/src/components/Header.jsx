import { Link } from 'wouter'
import MaskHeader from './../assets/mask/mask-header.png'
import MainLogo from './MainLogo'
import ToggleTheme from './ToogleTheme'

function Header() {
  return (
    <header className="relative min-h-40">
      <div
        className="absolute inset-0 -z-10 bg-primary-100 bg-left bg-repeat-x"
        style={{
          backgroundImage: `url(${MaskHeader})`,
          borderRadius: '25% 25% 25% 6% / 0% 0% 0% 50%',
        }}></div>

      <div className="container-layout flex items-start justify-between pb-6 pt-12 text-white">
        <Link href="/" className="block w-full max-w-[116px] text-current">
          <h1 className="hidden">Devjobs</h1>

          <MainLogo />
        </Link>

        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header
