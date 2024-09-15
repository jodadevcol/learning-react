import { Button, Card, Divider, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'

function CreateNewUser() {
  const { addNewUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form) throw new Error('Form not found')

    const sex = Math.random() > 0.5 ? 'men' : 'women'
    const photo = Math.floor(Math.random() * 80)

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const newUserData = {
      name: {
        first: data['name-first']?.toString(),
        last: data['name-last']?.toString()
      },
      picture: {
        thumbnail: `https://randomuser.me/api/portraits/thumb/${sex}/${photo}.jpg`
      },
      email: data.email.toString(),
      dob: {
        age: Number(data.age)
      },
      cell: data.phone.toString(),
      location: {
        city: data['location-city']?.toString(),
        country: data['location-country']?.toString()
      }
    }

    addNewUser(newUserData)

    form.reset()
  }

  return (
    <Card>
      <Title>Create New User</Title>

      <Divider className='my-4' />

      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 w-full max-w-full'>
        <div className='w-full flex items-center justify-start gap-x-2'>
          <TextInput placeholder='Enter first name' id='name-first' name='name-first' type='text' />
          <TextInput className='space-y-0' placeholder='Enter last name' id='name-last' name='name-last' type='text' />
        </div>

        <div className='w-full'>
          <TextInput placeholder='Enter email' id='email' name='email' type='email' />
        </div>

        <div className='w-full'>
          <TextInput placeholder='Enter age' id='age' name='age' type='number' />
        </div>

        <div className='w-full'>
          <TextInput placeholder='Enter phone' id='phone' name='phone' type='tel' />
        </div>

        <div className='w-full flex items-center justify-start gap-x-2'>
          <TextInput placeholder='Enter city' id='location-city' name='location-city' type='text' />
          <TextInput className='space-y-0' placeholder='Enter country' id='location-country' name='location-country' type='text' />
        </div>

        <Button type='submit' className='w-full'>
          Create user
        </Button>
      </form>
    </Card>
  )
}

export default CreateNewUser
