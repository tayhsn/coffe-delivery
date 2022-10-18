import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  #cep {
    grid-column: 1;
  }

  #street {
    grid-column: span 3;
  }

  #complement {
    grid-column: span 2;
  }

  input {
    background: none;
    border: none;
    border-radius: 4px;
    padding: 0.75rem;
    height: 100%;

    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({ theme }) => theme.colors['base-text']};
    background: ${({ theme }) => theme.colors['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }
`
