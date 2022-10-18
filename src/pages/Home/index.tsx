import { ProductsList } from './components/ProductsList'
import { Banner } from './components/Banner'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <ProductsList />
    </HomeContainer>
  )
}
