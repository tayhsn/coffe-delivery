import produce from 'immer'
import { CartItem } from '../context/CartContext'
import { ActionTypes } from './actions'

interface CartState {
  cartItems: CartItem[]
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffee = action.payload.coffee

      const coffeeAlreadyInCart = state.cartItems.findIndex(
        (product) => product.id === coffee.id
      )

      return produce(state.cartItems, (draft) => {
        if (coffeeAlreadyInCart < 0) {
          draft.push(coffee)
        } else {
          draft[coffeeAlreadyInCart].quantity += coffee.quantity
        }
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      const cartItemId = action.payload.cartItemId

      return produce(state.cartItems, (draft) => {
        const coffeeExistsInCart = state.cartItems.findIndex(
          (product) => product.id === cartItemId
        )

        if (coffeeExistsInCart >= 0) {
          draft.splice(coffeeExistsInCart, 1)
        }
      })
    }
    case ActionTypes.CHANGE_CART_ITEM_QUANTITY: {
      const cartItemId = action.payload.cartItemId
      const change = action.payload.change

      return produce(state.cartItems, (draft) => {
        const coffeeExistsInCart = state.cartItems.findIndex(
          (product) => product.id === cartItemId
        )

        if (coffeeExistsInCart >= 0) {
          const item = draft[coffeeExistsInCart]

          switch (change) {
            case 'increase': {
              draft[coffeeExistsInCart].quantity = item.quantity + 1
              break
            }
            case 'decrease': {
              draft[coffeeExistsInCart].quantity >= 1 &&
                (draft[coffeeExistsInCart].quantity = item.quantity - 1)
              break
            }
          }
        }
      })
    }
    case ActionTypes.CLEAN_CART: {
      return produce(state.cartItems, (draft) => (draft = []))
    }
    default:
      throw new Error()
  }
}
