import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CompleteOrder } from './components/CompleteOrder'
import { Cart } from './components/Cart'
import { CheckoutContainer } from './styles'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  CREDIT = 'credit',
  DEBIT = 'debit',
  MONEY = 'money',
}

const adressFormValidationSchema = zod.object({
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  cep: zod.string().min(1, 'Informe o CEP'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof adressFormValidationSchema>

export const Checkout = () => {
  const navigate = useNavigate()

  const adressForm = useForm<OrderData>({
    resolver: zodResolver(adressFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit, reset } = adressForm

  const handleConfirmOrder = (data: OrderData) => {
    navigate('/confirmed-order', {
      state: data,
    })

    reset()
  }

  return (
    <FormProvider {...adressForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrder />

        <Cart />
      </CheckoutContainer>
    </FormProvider>
  )
}
