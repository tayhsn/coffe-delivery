import styled from 'styled-components'

export const CardItemContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 6px 36px;

  img {
    margin-top: -60px;
  }
`

export const CardTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const CardTextsContainer = styled.div`
  width: 13.5rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
`

export const CardActionsContainer = styled.div`
  width: 13rem;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  gap: 1.8125rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ActionsIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CartIconContainer = styled.span`
  background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
  color: ${({ theme }) => theme.colors['base-white']};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
