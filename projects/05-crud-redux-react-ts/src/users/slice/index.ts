import UsersData from '@/users/mooks/users-data.json'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { UserData, UserId, UserUUID } from '@users/main.types'

const DEFAULT_USER = UsersData?.users

const initialState: UserId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState) return JSON.parse(persistedState).user

  return DEFAULT_USER
})()

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserData>) => {
      const newUUID = crypto.randomUUID()
      return [
        ...state,
        {
          login: {
            uuid: newUUID
          },
          ...action.payload
        }
      ]
    },
    deleteUserById: (state, action: PayloadAction<UserUUID>) => {
      const uuid = action.payload
      return state.filter((user) => user.login.uuid !== uuid)
    },
    rollbackUser: (state, action: PayloadAction<UserId>) => {
      const idUser = action.payload
      const isUserAlreadyExist = state.some((user) => user.login.uuid === idUser.login.uuid)

      if (!isUserAlreadyExist) {
        return [...state, idUser]
      }
    }
  }
})

export default userSlice.reducer

export const { createNewUser, deleteUserById, rollbackUser } = userSlice.actions
