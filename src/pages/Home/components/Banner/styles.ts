import styled from 'styled-components'

export const BannerContainer = styled.section`
  width: 80%;
  min-height: 34rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media screen and (max-width: 1400px) {
    justify-content: center;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4.125rem;
`

export const InfoBanner = styled.div`
  width: 36.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const IconsContainer = styled.span`
  display: grid;
  grid-template-columns: 40% 50%;

  gap: 1.25rem 2.5rem;
`
