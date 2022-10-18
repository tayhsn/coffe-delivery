import { MapPin, Moon, ShoppingCart, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../App'
import coffeLogo from '../../assets/coffe-logo.svg'
import { useCart } from '../../hooks/useCart'
import {
  ButtonDarkLight,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'

export const Header = () => {
  const { cartQuantity } = useCart()
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeLogo} alt="Coffe Delivery logotipo" />
      </NavLink>

      <HeaderButtonsContainer>
        <HeaderButton variant="purple" themeNow={theme}>
          <MapPin weight="fill" size={20} />
          Belo Horizonte, BH
        </HeaderButton>

        <NavLink to="check-out">
          <HeaderButton variant="yellow" themeNow={theme}>
            <ShoppingCart weight="fill" size={20} />
            <span>{cartQuantity}</span>
          </HeaderButton>
        </NavLink>

        <ButtonDarkLight onClick={toggleTheme} themeNow={theme}>
          {theme === 'default' ? <Sun size={24} /> : <Moon size={24} />}
        </ButtonDarkLight>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
