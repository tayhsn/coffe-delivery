import { CartItem } from '../context/CartContext'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  CLEAN_CART = 'CLEAN_CART',
}

export function addCoffeeToCartAction(coffee: CartItem) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function removeItemAction(cartItemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      cartItemId,
    },
  }
}

export function changeCartItemQuantityAction(
  cartItemId: number,
  change: 'increase' | 'decrease'
) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      change,
      cartItemId,
    },
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}
