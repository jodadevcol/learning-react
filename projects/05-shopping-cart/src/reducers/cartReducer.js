import { CART_ACTION_TYPES } from '../const/global'

export const cartInitialState = []

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const indexProductInCart = state.findIndex(item => item.id === id)

    if (indexProductInCart >= 0) {
      const newState = structuredClone(state)
      newState[indexProductInCart].quantity += 1
      return newState
    }

    return [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    return state.filter(item => item.id !== id)
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    return cartInitialState
  }
}

export function cartReducer (state, action) {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
