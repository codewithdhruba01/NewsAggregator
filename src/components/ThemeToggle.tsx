import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="text-gray-800" size={24} />
      ) : (
        <Sun className="text-yellow-500" size={24} />
      )}
    </button>
  )
}

export default ThemeToggle