import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'


// Step 1: Create a context
export const UserContext = createContext();

// Step 2: Wrap all the child inside a provider whoeveer wanted to use
// contextName.Provider

// Step 3: Pass value in the provider

// Step 4: now go and consume inside the child




export const ThemeContext = createContext();



function App() {
  const [user, setUser] = useState({
    name: "Priyanshu"
  })

  const [theme, setTheme] = useState('light');


  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className='container' style={{ backgroundColor: (theme === 'light') ? "beige" : "black" }}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
