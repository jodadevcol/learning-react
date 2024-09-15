import '@/App.css'
import ListUsers from '@users/components/ListUsers'
import { Toaster } from 'sonner'
import CreateNewUser from './users/components/CreateNewUser'

function App() {
  return (
    <>
      <main>
        <section>
          <article>
            <ListUsers />
          </article>
        </section>

        <aside className='hidden'>
          <CreateNewUser />
        </aside>
        <Toaster richColors />
      </main>
    </>
  )
}

export default App
