import { useState } from 'react'
import './App.css'
import Habitantes710 from './pages/Habitantes710'
import EnzoValentina711 from './pages/EnzoValentina711'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
    <nav>
      <button onClick={() => setPagina(<Habitantes710/>)}>7.10</button>
      <button onClick={() => setPagina(<EnzoValentina711/>)}>7.11</button>
    </nav>
      {pagina}
    </>
  )
}

export default App
