import React from 'react'

const Card = ({name, setName}) => {
  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)} />

        <h2>Name state variable value inside Card (child of App) : {name}</h2>
    </div>
  )
}

export default Card