import orderDelivery from '../../assets/order-delivery.png'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { FinishedOrderContainer, OrderDetailsContainer } from './styles'
import { RegularText, TitleText } from '../../components/Typography'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { paymentMethods } from '../Checkout/components/CompleteOrder/components/Payment/PaymentMethods'
import { OrderData } from '../Checkout'

interface LocationType {
  state: OrderData
}

export const ConfirmedOrder = () => {
  const { colors } = useTheme()

  const navigate = useNavigate()
  const { state } = useLocation() as LocationType

  useEffect(() => {
    if (!state) navigate('/')
  }, [])

  if (!state) return <></>

  return (
    <FinishedOrderContainer>
      <span>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText color="subtitle" size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </span>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColorBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColorBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega <br />
                <strong>20min - 30min </strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColorBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={orderDelivery} />
      </section>
    </FinishedOrderContainer>
  )
}
