import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 80%;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1274px) {
    flex-direction: column;
    align-items: center;
  }
`
