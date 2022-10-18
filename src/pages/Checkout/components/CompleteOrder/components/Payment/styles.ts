import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 550px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PaymentInputContainer = styled.div`
  cursor: pointer;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['brand-purple-light']};
      border-color: ${theme.colors['brand-purple']};

      &:hover {
        background: ${theme.colors['brand-purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  height: 3rem;
  padding: 0 1rem;

  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`
