import styled from 'styled-components'

export const SelectedItemContainer = styled.div`
  width: 23rem;
  height: 5rem;
  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  padding: 0 1rem 1rem 0;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ActionContainer = styled.div`
  width: 100%;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const DeleteButton = styled.button`
  width: max-content;
  display: flex;
  gap: 0.25rem;

  border: 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['brand-purple']};

  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
