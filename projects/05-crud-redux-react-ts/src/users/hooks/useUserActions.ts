import { useAppDispatch } from '@/hooks/useStore'
import { UserData, UserUUID } from '@users/main.types'
import { createNewUser, deleteUserById } from '@users/slice'

export function useUserActions() {
  const dispatch = useAppDispatch()

  const addNewUser = ({ name, picture, email, dob, cell, location }: UserData) => {
    dispatch(
      createNewUser({
        name: {
          first: name.first,
          last: name.last
        },
        picture: {
          thumbnail: picture.thumbnail
        },
        email,
        dob: {
          age: dob.age
        },
        cell: cell,
        location: {
          city: location.city,
          country: location.country
        }
      })
    )
  }

  const removeUserById = (uuid: UserUUID) => {
    dispatch(deleteUserById(uuid))
  }

  return {
    addNewUser,
    removeUserById
  }
}
