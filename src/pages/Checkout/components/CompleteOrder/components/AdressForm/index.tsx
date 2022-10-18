import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from './styles'

export const AddressForm = () => {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <input placeholder="CEP" id="cep" {...register('cep')} />

      <input placeholder="Rua" id="street" {...register('street')} />

      <input placeholder="Número" id="number" {...register('number')} />

      <input
        id="complement"
        placeholder="Complemento (Opcional)"
        {...register('complement')}
      />

      <input placeholder="Bairro" {...register('district')} />

      <input placeholder="Cidade" {...register('city')} />

      <input placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  )
}
