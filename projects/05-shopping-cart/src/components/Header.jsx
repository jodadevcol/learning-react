import './Header.css'
import { MainLogo, MenuIcon } from './Icons'

export function Header () {
  return (
    <header className='fixed top-0 left-0 right-0 w-full max-w-full h-auto min-h-[60px] z-0'>
      <div className='relative w-full max-w-6xl after:block after:absolute after:bottom-0 after:w-full after:h-1 after:bg-col-light-gray'>
        <div className='flex items-center gap-x-4 py-5 px-6'>
          <button className='w-full max-w-[16px] h-4 text-col-dark-gray'>
            <MenuIcon />
          </button>

          <a className='w-full max-w-[136px] text-col-dark-blue' href='/'>
            <MainLogo />
          </a>

          {/* <Cart /> */}
        </div>
      </div>
    </header>
  )
}
