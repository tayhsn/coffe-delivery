import styled, { css } from 'styled-components'

export const ProductsListContainer = styled.main`
  width: 80%;
  margin: 1rem auto;
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.375rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;

  gap: 2.5rem 2rem;

  @media screen and (max-width: 1400px) {
    justify-content: center;
  }
`

export const FilterByContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
`

interface TagContainerProps {
  colorBg: string
}

export const TagContainer = styled.span<TagContainerProps>`
  padding: 6px 12px;
  border-radius: 100px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.textSizes['components-tag']};

  color: ${({ theme }) => theme.colors['brand-yellow-dark']};

  background-color: ${({ colorBg }) => colorBg};

  cursor: ${({ colorBg, theme }) =>
    colorBg === theme.colors['base-white'] ? 'pointer' : 'default'};

  border: ${({ colorBg, theme }) =>
    colorBg === theme.colors['base-white']
      ? `1px solid ${theme.colors['brand-yellow-light']} `
      : 0};
`
