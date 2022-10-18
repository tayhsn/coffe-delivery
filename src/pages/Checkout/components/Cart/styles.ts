import styled from 'styled-components'

export const ItemsOnCartContainer = styled.div`
  width: 40rem;
  max-height: 32rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 40px;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors['base-card']};

  > button {
    width: 23rem;
    height: 2.875rem;

    border: 0;
    border-radius: 6px;

    padding: 12px 8px;

    background-color: ${({ theme }) => theme.colors['brand-yellow']};
    color: ${({ theme }) => theme.colors['base-white']};

    font-size: ${({ theme }) => theme.textSizes['components-button-g']};
    font-weight: 700;

    &:disabled {
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }
`

export const ItemsContainer = styled.div`
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors['base-card']};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors['brand-purple']};
  }
`

export const TotalContainer = styled.table`
  width: 23rem;
  height: 5.75rem;

  margin: 0 auto;

  tr {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Total = styled.tr`
  font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 700;
`
