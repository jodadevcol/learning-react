import { type User } from "../types/user.d"

interface Props {
  showColors: boolean,
  users: User[]
}

function UserList({ showColors, users }: Props) {
  return (
    <>
      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>Name</td>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>Country</td>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>Email Address</td>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>Current Age</td>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>registered Age</td>
            <td className='p-2 capitalize font-semibold text-lg text-white/90 bg-black/20'>Actions</td>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => {
              const isEven = index % 2 === 0 ? 'bg-black/10' : 'bg-black/5'
              const showColor = showColors ? isEven : ''

              return (
                <tr key={user.login.uuid} className={showColor}>
                  <td className='p-2 text-left'>
                    <div className='flex items-center gap-x-4'>
                      <div className='rounded-full overflow-hidden max-w-12 aspect-square'>
                        <img className='w-full object-cover' src={`${user.picture.thumbnail}`} alt={`Avatar of ${user.name.first} ${user.name.last}`} />
                      </div>
                      <div>{user.name.first} {user.name.last}
                      </div>
                    </div>
                  </td>
                  <td className='p-2 text-left'>
                    <div>{user.location.country}</div>
                  </td>
                  <td className='p-2 text-left'>
                    <div>{user.email}</div>
                  </td>
                  <td className='p-2 text-center'><div>{user.dob.age}</div></td>
                  <td className='p-2 text-center'><div>{user.registered.age}</div></td>
                  <td className='p-2 text-center'>
                    <button>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default UserList