import homeCoffee from '../../../../assets/home-coffee.png'
import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  BannerContainer,
  IconsContainer,
  InfoBanner,
  InfoContainer,
} from './styles'

export const Banner = () => {
  const { colors } = useTheme()

  return (
    <BannerContainer>
      <InfoContainer>
        <InfoBanner>
          <TitleText size="xl" color="title">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
        </InfoBanner>

        <IconsContainer>
          <InfoWithIcon
            icon={<ShoppingCart weight="fill" />}
            text={<RegularText>Compra simples e segura</RegularText>}
            iconColorBg={colors['brand-yellow-dark']}
          />

          <InfoWithIcon
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
            iconColorBg={colors['base-text']}
          />

          <InfoWithIcon
            icon={<Timer weight="fill" />}
            text={<RegularText>Entrega rápida e rastreada</RegularText>}
            iconColorBg={colors['brand-yellow']}
          />

          <InfoWithIcon
            icon={<Coffee weight="fill" />}
            text={<RegularText>O café chega fresquinho até você</RegularText>}
            iconColorBg={colors['brand-purple']}
          />
        </IconsContainer>
      </InfoContainer>

      <img src={homeCoffee} />
    </BannerContainer>
  )
}
