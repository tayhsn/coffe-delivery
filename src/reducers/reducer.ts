import { produce } from 'immer'
import { CartItem } from '../context/CartContext'
import { Actions } from './actions'

export const cartReducer = (cartItems: CartItem[], action: any): CartItem[] => {
  const { type, payload } = action

  switch (type) {
    case Actions.ADD_COFFEE_TO_CART: {
      const coffee = payload.coffee

      const coffeeAlreadyInCart = cartItems.findIndex(
        (product) => product.id === coffee.id
      )

      return produce(cartItems, (draft) => {
        if (coffeeAlreadyInCart < 0) {
          draft.push(coffee)
        } else {
          draft[coffeeAlreadyInCart].quantity += coffee.quantity
        }
      })
    }
    case Actions.REMOVE_ITEM: {
      const { payload } = action

      const { cartItemId } = payload

      return produce(cartItems, (draft) => {
        const coffeeExistsInCart = cartItems.findIndex(
          (product) => product.id === cartItemId
        )

        if (coffeeExistsInCart >= 0) {
          draft.splice(coffeeExistsInCart, 1)
        }
      })
    }
    case Actions.CHANGE_CART_ITEM_QUANTITY: {
      const { payload } = action

      const { cartItemId, change } = payload

      return produce(cartItems, (draft) => {
        const coffeeExistsInCart = cartItems.findIndex(
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
    case Actions.CLEAN_CART: {
      return produce(cartItems, (draft) => (draft = []))
    }
    default:
      throw new Error(`Unhandled type ${type}`)
  }
}
