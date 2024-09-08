import { useContext } from 'react'
import { GlobalContext } from '../context/Global'
import { MoonIcon, SunIcon } from './Icons'

function ToggleTheme() {
  const { currentTheme, handleToggle, handleChange } = useContext(GlobalContext)

  return (
    <div className="flex items-center justify-center gap-x-4">
      <span className="w-5">
        <SunIcon />
      </span>
      <div className="relative h-6 w-12 overflow-hidden rounded-full bg-white p-1">
        <input
          type="checkbox"
          id="toggle-check"
          onClick={handleToggle}
          checked={currentTheme}
          onChange={handleChange}
          className="peer/toggle-check absolute inset-0 cursor-pointer appearance-none border-none outline-none"
        />
        <span className="bg-primary-100 pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 translate-x-0 rounded-full transition-transform duration-300 peer-checked/toggle-check:translate-x-6"></span>
      </div>
      <span className="w-4">
        <MoonIcon />
      </span>
    </div>
  )
}

export default ToggleTheme
