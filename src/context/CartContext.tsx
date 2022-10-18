import produce from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../utils/CoffesList'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addItemToCart: (coffee: CartItem) => void
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

const LOCAL_STORAGE_KEY = '@coffe-delivery:cartItems'

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storageCartItems) return JSON.parse(storageCartItems)
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItems) => {
    return total + cartItems.price * cartItems.quantity
  }, 0)

  const addItemToCart = (coffe: CartItem) => {
    const coffeAlreadyExists = cartItems.findIndex(
      (product) => product.id === coffe.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExists < 0) draft.push(coffe)
      else draft[coffeAlreadyExists].quantity += coffe.quantity
    })

    setCartItems(newCart)
  }

  const removeItem = (cartItemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(
        (product) => product.id === cartItemId
      )

      if (coffeExistsInCart >= 0) draft.splice(coffeExistsInCart, 1)
    })

    setCartItems(newCart)
  }

  const changeCartItemQuantity = (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(
        (product) => product.id === cartItemId
      )

      if (coffeExistsInCart >= 0) {
        const item = draft[coffeExistsInCart]
        draft[coffeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  const cleanCart = () => setCartItems([])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addItemToCart,
        removeItem,
        changeCartItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
