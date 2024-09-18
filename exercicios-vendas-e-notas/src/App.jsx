import { useState } from 'react'
import './App.css'
import Vendaas523 from './pages/Vendaas523'
import Notas524 from './pages/Notas524'

function App() {

  const [pagina, setPagina] = useState('')

  return (
    <>

      <nav>

        <button onClick={() => setPagina(<Vendaas523/>)}>Exercício 5.23</button>
        <button onClick={() => setPagina(<Notas524/>)}>Exercício 5.24</button>

      </nav>

      {pagina}
      
    </>
  )
}

export default App
