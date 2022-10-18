import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../../../components/Typography'
import { useCart } from '../../../../../../hooks/useCart'
import { formatMoney } from '../../../../../../utils/formatMoney'
import { TagContainer } from '../../styles'
import {
  CardItemContainer,
  CardTagsContainer,
  CardTextsContainer,
  CardActionsContainer,
  ActionsIconsContainer,
  CartIconContainer,
} from './styles'

export interface Coffee {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export const CardItem = ({ coffee }: CoffeeProps) => {
  const { colors } = useTheme()
  const { addItemToCart } = useCart()
  const [quantity, setQuantity] = useState(0)

  const handleIncrease = () => {
    setQuantity((state) => state + 1)
  }

  const handleDecrease = () => {
    setQuantity((state) => (state >= 1 ? state - 1 : 0))
  }

  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addItemToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CardItemContainer>
      <img src={coffee.image} />

      <CardTagsContainer>
        {coffee.tags.map((tag) => (
          <TagContainer key={tag} colorBg={colors['brand-yellow-light']}>
            {tag.toUpperCase()}
          </TagContainer>
        ))}
      </CardTagsContainer>

      <CardTextsContainer>
        <TitleText size="s">{coffee.name}</TitleText>
        <RegularText size="s">{coffee.description}</RegularText>
      </CardTextsContainer>

      <CardActionsContainer>
        <div>
          <RegularText>R$</RegularText>
          <TitleText size="m">{formattedPrice}</TitleText>
        </div>

        <ActionsIconsContainer>
          <QuantityInput
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <CartIconContainer onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartIconContainer>
        </ActionsIconsContainer>
      </CardActionsContainer>
    </CardItemContainer>
  )
}
