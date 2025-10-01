import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
  const user = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    (theme === 'light') ? setTheme('black') : setTheme('light');
  }

  return (
    <div>
      <h3 style={{color: (theme === 'light') ? 'black' : 'white'}}>User : {user.name}</h3>
      <button onClick={handleClick} style={{ backgroundColor: 'skyblue', color: "blue", border: "1px solid blue", cursor: 'pointer' }} >Change color</button>
    </div>
  )
}

export default ChildC