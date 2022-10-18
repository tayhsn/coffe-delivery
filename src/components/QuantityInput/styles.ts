import styled from 'styled-components'

export const QuantityInputContainer = styled.span`
  width: 5rem;
  height: 2.375rem;

  background: ${({ theme }) => theme.colors['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;
  padding: 8px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }

  button {
    display: flex;

    background: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['brand-purple']};

    border: none;

    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
`
