import { ReactNode, createContext, useEffect, useState } from 'react'

import { coffees } from '../utils/coffee-list'

interface CoffeeCartProps {
  name: string
  img: string
  tag: string
  description: string
  price: number
  amount: number
}

interface CoffeeContextType {
  coffeeShop: CoffeeCartProps[]
  updateCoffeeAmount: (coffeeName: string, coffeeAmount: number) => void
  // updateCoffeeCart: () => void
  amountAllCoffee: number
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  function updateCoffeeAmount(coffeeName: string, coffeeAmount: number) {
    setCoffeeShop(
      coffeeShop.map((coffee) => {
        if (coffee.name === coffeeName) {
          return { ...coffee, amount: coffeeAmount }
          // return (coffee.amount = coffeeAmount)
        } else {
          return coffee
        }
      }),
    )
  }

  function updateCoffeeCart() {
    const amountAll = coffeeShop.reduce(
      (acc, coffee) => {
        acc.amountAll += coffee.amount

        return acc
      },
      {
        amountAll: 0,
      },
    )
    setAmountAllCoffee(amountAll.amountAll)
  }
  const [amountAllCoffee, setAmountAllCoffee] = useState(0)
  const [coffeeShop, setCoffeeShop] = useState<CoffeeCartProps[]>([])

  useEffect(() => {
    setCoffeeShop(coffees)
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeShop)
    localStorage.setItem('@coffee-delivery-1.0.0', stateJSON)
  }, [coffeeShop])

  // useEffect(() => {
  //   const storedCoffeeStateAsJSON = localStorage.getItem(
  //     '@coffee-delivery:state-1.0.0',
  //   )

  //   if (storedCoffeeStateAsJSON) {
  //     return JSON.parse(storedCoffeeStateAsJSON)
  //   } else {
  //     const initialCoffeeShop: CoffeeCartProps[] = coffees
  //     const stateCoffeeJSON = JSON.stringify(initialCoffeeShop)
  //     setCoffeeShop(initialCoffeeShop)
  //     localStorage.setItem('@focus-timer:cycles-state-1.0.0', stateCoffeeJSON)
  //   }
  // }, [])

  // const initialCoffeeShop: CoffeeCartProps[] = coffees
  // setCoffeeShop(initialCoffeeShop)
  return (
    <CoffeeContext.Provider
      value={{
        amountAllCoffee,
        updateCoffeeAmount,
        coffeeShop,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
