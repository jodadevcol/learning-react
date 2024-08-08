import resultUsers from './mockup/resultUsers.json'
import UserList from './components/UserList'
import './App.css'
import { User } from './types/user'
import { useState } from 'react'

function App() {
  const [showColor, setShowColor] = useState(false)
  const dataUsers = resultUsers.results as unknown as User[]
  const hasUsers = dataUsers.length > 0

  const toggleColors = () => { setShowColor(!showColor) }

  return (
    <>
      <main>
        <h1 className='mb-5 font-bold text-3xl'>Usuarios</h1>

        <section>
          <article>
            <header className='mb-5'>
              <ul className='flex items-center justify-center'>
                <li className='px-2'>
                  <button className='flex items-center justify-center py-2 px-4 rounded bg-slate-900' onClick={toggleColors}>
                    <span>Draw rows</span>
                  </button>
                </li>
              </ul>
            </header>
            {
              hasUsers
                ? <UserList showColors={showColor} users={dataUsers}></UserList>
                : <p>No users found</p>
            }
          </article>
        </section>
      </main>
    </>
  )
}

export default App
