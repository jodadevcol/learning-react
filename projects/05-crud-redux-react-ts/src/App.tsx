import '@/App.css'
import { Card } from '@tremor/react'
import CreateNewUser from '@users/components/CreateNewUser'
import ListUsers from '@users/components/ListUsers'

function App() {
  return (
    <Card className='flex items-start justify-between gap-x-5'>
      <ListUsers />
      <CreateNewUser />
    </Card>
  )
}

export default App
