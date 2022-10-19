import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee } from '../data/CoffesList'
import {
  Actions,
  addCoffeeToCartAction,
  changeCartItemQuantityAction,
  cleanCartAction,
  removeItemAction,
} from '../reducers/actions'
import { cartReducer, CartState } from '../reducers/reducer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
  removeItem: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const LOCAL_STORAGE_KEY = '@coffee-delivery:cartItems'

const initialStateCart: CartState = {
  cartItems: [],
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialStateCart,
    () => {
      const storagedCartItems = localStorage.getItem(LOCAL_STORAGE_KEY)

      if (storagedCartItems) return JSON.parse(storagedCartItems)

      return initialStateCart
    }
  )

  const { cartItems } = cartState

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItems) => {
    return total + cartItems.price * cartItems.quantity
  }, 0)

  const addCoffeeToCart = (coffee: CartItem) => {
    dispatch(addCoffeeToCartAction(coffee))
  }

  const changeCartItemQuantity = (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => {
    dispatch(changeCartItemQuantityAction(cartItemId, type))
  }

  const removeItem = (cartItemId: number) =>
    dispatch(removeItemAction(cartItemId))

  const cleanCart = () => dispatch(cleanCartAction())

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        removeItem,
        changeCartItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
