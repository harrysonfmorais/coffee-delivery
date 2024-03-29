import styled from 'styled-components'
import { rgba } from 'polished'
import aboutBackgroundImg from '../../../../assets/about-background.png'
import { TitleText } from '../../../../components/Typhography'

export const AboutContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${aboutBackgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors.white} 0%,
      ${rgba(theme.colors['base-background'], 0.2)} 50%,
      ${theme.colors['base-background']} 100%
    )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const AboutTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
