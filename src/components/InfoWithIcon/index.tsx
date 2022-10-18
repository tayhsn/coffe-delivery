import { ReactNode } from 'react'
import { InfoWithIconContainer, IconContainer } from './styles'

interface InfoItemProps {
  icon: ReactNode
  text: string | ReactNode
  iconColorBg: string
}

export const InfoWithIcon = ({ icon, iconColorBg, text }: InfoItemProps) => {
  return (
    <InfoWithIconContainer>
      <IconContainer colorBg={iconColorBg}>{icon}</IconContainer>

      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
