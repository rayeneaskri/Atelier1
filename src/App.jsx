import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Facture from './components/Facture'
import Livres from './components/Livre'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to our website !</h1>
      <Facture/>
       <Livres/> 
    </>
  )
}

export default App;