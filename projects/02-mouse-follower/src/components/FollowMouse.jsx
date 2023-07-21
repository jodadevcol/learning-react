import { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // EFECTO PARA SEUIR EL CURSOR DEL USUARIO
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // CLEANUP
    // --> se ejecuta cuando el componente es desmontado
    // --> cuando cambian las dependencias, previamente de ser ejecutado el nuevo efecto
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

    // DEPENDENCIAS DEL USEEFFECT
    // --> []: se ejecuta solo una vez, al momento de montar el componente
    // --> [dependencies, ...]: se ejecuta al montar el componente, y al haber un cambio en sus dependencias declaradas.
    // --> undefined: se ejecuta cada vez que se renderiza el componente
  }, [enabled])

  // EFECTO PARA EL CAMBIO DEL CURSOR DEL BODY
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div className='pointer-icon' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      <button onClick={() => setEnabled(!enabled)}>
        Follow pointer ({enabled ? 'Disable' : 'Active'})
      </button>
    </>
  )
}
