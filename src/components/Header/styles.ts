import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 80%;
  height: 6.5rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

interface HeaderButtonsProps extends ButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonsProps>`
  min-width: 2.3rem;
  height: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0 0.5rem;
  border-radius: 6px;
  border: none;

  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['base-white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`brand-${variant}-light`]};
    color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`brand-${variant}`]};
      }
    `}
`

interface ButtonProps {
  themeNow: string
}

export const ButtonDarkLight = styled.button<ButtonProps>`
  min-width: 2.3rem;
  height: 2.3rem;

  border: 0;
  border-radius: 5px;

  background: ${({ theme, themeNow }) =>
    themeNow === 'default'
      ? theme.colors['brand-yellow-light']
      : theme.colors['brand-purple-dark']};

  color: ${({ theme }) => theme.colors['brand-yellow-dark']};

  &:hover {
    color: ${({ theme }) => theme.colors['brand-yellow']};
  }
`
