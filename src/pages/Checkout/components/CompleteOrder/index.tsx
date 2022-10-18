import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { AddressForm } from './components/AdressForm'
import { PaymentMethods } from './components/Payment/PaymentMethods'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { TitleText } from '../../../../components/Typography'

export const CompleteOrder = () => {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" weight={700} color="title">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />

        <PaymentMethods />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
