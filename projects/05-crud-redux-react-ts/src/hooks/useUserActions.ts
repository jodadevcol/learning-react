import { deleteUserById, UserUUID } from '../store/users/slice'
import { useAppDispatch } from './useStore'

export function useUserActions() {
  const dispatch = useAppDispatch()

  const removeUserById = (uuid: UserUUID) => {
    dispatch(deleteUserById(uuid))
  }

  return {
    removeUserById
  }
}
