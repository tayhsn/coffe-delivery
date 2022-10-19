import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './context/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/theme/dark'
import { defaultTheme } from './styles/theme/default'

type Themes = 'default' | 'dark'

interface ThemeContextType {
  theme: Themes
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

const THEME_LOCAL_STORAGE = '@coffee-delivery:theme'
export function App() {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem(THEME_LOCAL_STORAGE)

    if (storageTheme) {
      return JSON.parse(storageTheme)
    }

    return 'default'
  })

  const toggleTheme = () => {
    const themeNow = theme === 'default' ? 'dark' : 'default'
    setTheme(themeNow)
    localStorage.setItem(THEME_LOCAL_STORAGE, JSON.stringify(themeNow))
  }

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle />

        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
