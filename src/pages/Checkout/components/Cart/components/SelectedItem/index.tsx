import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { RegularText } from '../../../../../../components/Typography'
import { CartItem } from '../../../../../../context/CartContext'
import { useCart } from '../../../../../../hooks/useCart'
import { ActionContainer, DeleteButton, SelectedItemContainer } from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export const SelectedItem = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeItem } = useCart()

  const handleIncrease = () => {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  const handleRemove = () => {
    removeItem(coffee.id)
  }

  return (
    <SelectedItemContainer>
      <img src={coffee.image} />

      <ActionContainer>
        <RegularText size="m" color="subtitle">
          {coffee.name}
        </RegularText>

        <div>
          <QuantityInput
            quantity={coffee.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <DeleteButton onClick={handleRemove}>
            <Trash />
            <RegularText size="s" color="text">
              Remover
            </RegularText>
          </DeleteButton>
        </div>
      </ActionContainer>

      <span>
        <strong>R${coffee.price}</strong>
      </span>
    </SelectedItemContainer>
  )
}
