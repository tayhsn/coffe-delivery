import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export const QuantityInput = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) => {
  return (
    <QuantityInputContainer>
      <button onClick={onDecrease}>
        <Minus weight="fill" />
      </button>

      <input readOnly value={quantity} />

      <button onClick={onIncrease}>
        <Plus weight="fill" />
      </button>
    </QuantityInputContainer>
  )
}
