import { useState } from 'react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { coffeesList } from '../../../../data/CoffeesList'
import { CardItem } from './components/CardItem'
import {
  FilterByContainer,
  ListContainer,
  ListHeader,
  ProductsListContainer,
  TagContainer,
} from './styles'

const TAGS_TYPES = [
  'todos',
  'tradicional',
  'especial',
  'com leite',
  'alcoólico',
  'gelado',
]

export const ProductsList = () => {
  const { colors } = useTheme()
  const [tagFilter, setTagFilter] = useState<string | null>(null)

  const handleFilter = (selectedTag: string) => {
    selectedTag === 'todos' ? setTagFilter(null) : setTagFilter(selectedTag)
  }

  const filteredCoffees = coffeesList.filter((coffee) =>
    tagFilter ? coffee.tags.includes(tagFilter) : true
  )

  return (
    <ProductsListContainer>
      <ListHeader>
        <TitleText size="l">Nossos cafés</TitleText>
        <FilterByContainer>
          {TAGS_TYPES.map((tag) => (
            <TagContainer
              key={tag}
              colorBg={colors['base-white']}
              onClick={() => handleFilter(tag)}
            >
              {tag.toUpperCase()}
            </TagContainer>
          ))}
        </FilterByContainer>
      </ListHeader>

      <ListContainer>
        {filteredCoffees.map((coffee) => (
          <CardItem key={coffee.id} coffee={coffee} />
        ))}
      </ListContainer>
    </ProductsListContainer>
  )
}
