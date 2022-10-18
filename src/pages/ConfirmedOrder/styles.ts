import styled from 'styled-components'

export const FinishedOrderContainer = styled.div`
  width: 80%;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  align-items: left;

  gap: 2.5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 1rem;
  }

  @media screen and (max-width: 1274px) {
    align-items: center;

    section {
      justify-content: center;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  min-width: 32rem;

  padding: 40px;
  border-radius: 6px 36px;

  position: relative;

  background: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    min-width: 25rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
