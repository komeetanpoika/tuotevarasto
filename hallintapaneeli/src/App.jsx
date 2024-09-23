import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import Products from './components/Products.jsx'

const App = () => {
  const products = [
    {
      id: 1,
      name: "makkara",
      inventory: 2
    },
    {
      id: 2,
      name: "liha",
      inventory: 3
    }
  ]

  return (

    <div>
      <Button 
      text="hello"
      handleClick={()=>alert("hello")}
      />
      <Products products={products}/>
    </div>

  )
}

export default App
