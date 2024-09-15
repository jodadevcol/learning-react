import { UserId } from '@/users/main.types'
import userReducer, { rollbackUser } from '@/users/slice/index'
import { configureStore, type Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const persistanceStateLocalStorageMiddleware: Middleware = (state) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(state.getState()))
}

const syncStateDataBaseMiddleware: Middleware = (state) => (next) => (action) => {
  const { type, payload } = action
  const previusState = state.getState()

  next(action)

  if (type === 'users/deleteUserById') {
    const userIdToDelete = payload
    const userToDelete = previusState.user.find((user: UserId) => user.login.uuid === userIdToDelete)

    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log(`User with id ${userIdToDelete} was deleted`)
          toast.success(`User with id ${userIdToDelete} was deleted`)
        }

        // throw new Error('User not found')
      })
      .catch((error) => {
        console.log(`User with id ${userIdToDelete} had an error when trying to delete it`)
        toast.error(`User with id ${userIdToDelete} had an error when trying to delete it`)

        if (userToDelete) store.dispatch(rollbackUser(userToDelete))
        console.error(`Error: ${error}`)
      })
  }
}

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([persistanceStateLocalStorageMiddleware, syncStateDataBaseMiddleware])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
