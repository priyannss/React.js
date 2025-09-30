import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isloggedin, setIsloggedin] = useState(true);

  // return isloggedin ? (
  //   <LogoutBtn />
  // ) : (
  //   <LoginBtn />
  // )

  // return (
  //   <div>
  //     {isloggedin ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  return (
    <>
      <h1>Hello there, welcome!</h1>
      <div>
        {isloggedin && <LogoutBtn />}
        {!isloggedin && <LoginBtn />}
      </div>
    </>
  )
}

export default App
