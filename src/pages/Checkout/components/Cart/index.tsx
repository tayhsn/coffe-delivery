import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { SelectedItem } from './components/SelectedItem'
import {
  ItemsContainer,
  ItemsOnCartContainer,
  OrderContainer,
  Total,
  TotalContainer,
} from './styles'

const DELIVERY_FEE = 3.5

export const Cart = () => {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_FEE * cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryFee = formatMoney(DELIVERY_FEE)

  const cartIsEmpty = cartQuantity <= 0

  return (
    <ItemsOnCartContainer>
      <TitleText size="xs" weight={700} color="title">
        Cafés selecionados
      </TitleText>

      <OrderContainer>
        <ItemsContainer>
          {cartItems.map((item) => (
            <SelectedItem key={item.id} coffee={item} />
          ))}
        </ItemsContainer>

        <TotalContainer>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ {formattedItemsTotal}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ {formattedDeliveryFee}</td>
            </tr>
            <Total>
              <td>Total</td>
              <td>R$ {formattedCartTotal}</td>
            </Total>
          </tbody>
        </TotalContainer>

        <button type="submit" disabled={cartIsEmpty}>
          CONFIRMAR PEDIDO
        </button>
      </OrderContainer>
    </ItemsOnCartContainer>
  )
}
