import { useState } from 'react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { coffesList } from '../../../../utils/CoffesList'
import { CardItem } from './components/CardItem'
import {
  FilterByContainer,
  ListContainer,
  ListHeader,
  ProductsListContainer,
  TagContainer,
} from './styles'

const TAGS_TYPES = [
  'TRADICIONAL',
  'ESPECIAL',
  'COM LEITE',
  'ALCOÓLICO',
  'GELADO',
]

export const ProductsList = () => {
  const { colors } = useTheme()
  const [tagFilter, setTagFilter] = useState('')

  const coffesFiltered = (selectedTag: string) => {
    setTagFilter(selectedTag)
  }

  return (
    <ProductsListContainer>
      <ListHeader>
        <TitleText size="l">Nossos cafés</TitleText>
        <FilterByContainer>
          {TAGS_TYPES.map((tag) => (
            <TagContainer
              key={tag}
              colorBg={colors['base-white']}
              onClick={() => coffesFiltered(tag)}
            >
              {tag}
            </TagContainer>
          ))}
        </FilterByContainer>
      </ListHeader>

      <ListContainer>
        {coffesList.map((coffee) => (
          <CardItem key={coffee.id} coffee={coffee} />
        ))}
      </ListContainer>
    </ProductsListContainer>
  )
}
