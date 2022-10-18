import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 40px;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors['base-card']};
`
