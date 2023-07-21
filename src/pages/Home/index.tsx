import { HomeContainer } from './styles'

import { About } from './components/About'
import { OurCoffees } from './components/OurCoffees'

export function Home() {
  return (
    <HomeContainer>
      <About />
      <OurCoffees />
    </HomeContainer>
  )
}
