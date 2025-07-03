import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 ease-in-out">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App