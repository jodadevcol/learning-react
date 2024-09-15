import '@/App.css'
import { Card } from '@tremor/react'
import CreateNewUser from '@users/components/CreateNewUser'
import ListUsers from '@users/components/ListUsers'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Card className='flex items-start justify-between gap-x-5'>
        <ListUsers />
        <CreateNewUser />
      </Card>

      <Toaster richColors />
    </>
  )
}

export default App
