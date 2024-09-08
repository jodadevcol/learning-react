import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

const THEME = {
  dark: 'dark',
  light: 'light',
}

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState(true)

  const handleToggle = () => {
    toggleTheme()
    setTheme(!currentTheme)

    // console.log('GlobalProvider hanldeToggle')
  }

  const handleChange = (event) => {
    event.target.checked = !event.target.checked
    // console.log('GlobalProvider hanldeChange')
  }

  const toggleTheme = (updateTheme) => {
    const documentElement = window.document.documentElement
    const newTheme =
      updateTheme ?? !documentElement.classList.contains(THEME.dark)

    // Update the theme with state and class
    documentElement.classList.toggle(THEME.dark, newTheme)
    documentElement.classList.toggle(THEME.light, !newTheme)

    // console.log('GlobalProvider toggleTheme')
  }

  useEffect(() => {
    const mediaQueryTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const newTheme = mediaQueryTheme.matches
    toggleTheme(newTheme)
    setTheme(newTheme)

    const handleMediaQueryChange = (event) => {
      const newTheme = event.matches
      toggleTheme(newTheme)
      setTheme(newTheme)
    }

    mediaQueryTheme.addEventListener('change', handleMediaQueryChange)
    // toggleTheme(newTheme)

    // console.log('GlobalProvider useEffect')

    return () => {
      mediaQueryTheme.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{ currentTheme, handleToggle, handleChange }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { GlobalContext, GlobalProvider }
