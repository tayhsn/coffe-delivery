import { ReactNode } from 'react'
import { RegularText } from '../Typography'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <SectionTitleContainer>
      {icon}
      <span>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </span>
    </SectionTitleContainer>
  )
}
