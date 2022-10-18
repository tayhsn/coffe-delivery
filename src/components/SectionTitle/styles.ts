import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  line-height: 1.4;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-family: ${({ theme }) => theme.fonts.regular};
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
  }
`
