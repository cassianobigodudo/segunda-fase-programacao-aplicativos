import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

let numeroSenha = 0
function App() {
  // const [filaNormal, setFilaNormal] = useState([])
  // const [filaPreferencial, setFilaPreferencial] = useState([])
  // const [valueSelect, setValueSelect] = useState('normal')

  // function gerarSenha(){

  //   if(valueSelect == 'normal'){
  //     let senha = {

  //       data: Date.now(),
  //       tipo: 'normal',
  //       numero: numeroSenha

  //     }
  //     numeroSenha++

  //     setFilaNormal([...filaNormal, senha])
  // }else{

  //   let senha = {

  //     data: Date.now(),
  //     tipo: 'preferencial',
  //     numero: numeroSenha

  //   }
  //   numeroSenha++

  //   setFilaPreferencial([...filaPreferencial, senha])


  // }
  // }

  // function atender(){

  //   if(filaPreferencial.length){

  //     alert(filaPreferencial[0].numero)
  //     setFilaPreferencial(filaPreferencial.slice(1))

  //   }else if (filaNormal.length){

  //     alert(filaNormal[0].numero)
  //     setFilaNormal(filaNormal.slice(1))

  //   }else{

  //     alert("Filas vazias")
  //   }

  // }
  return (
    <>
    <Header/>
    <Body/>
      {/* <button onClick={gerarSenha}>Senha</button>
      <select name="valueSenha" 
        onChange={(event) => {setValueSelect(event.target.value)}}>
        <option value="normal">Normal</option>
        <option value="preferencial">Preferencial</option>
      </select>
      <button onClick={atender}>Atender</button>

      {filaPreferencial.map( (senha) => (

        <div key={senha.numero}>
          <p>{senha.numero}</p>
          <p>{senha.tipo}</p>
        </div>

      ))}

      {filaNormal.map( (senha) => (

        <div key={senha.numero}>
          <p>{senha.numero}</p>
          <p>{senha.tipo}</p>
        </div>

      ))} */}

      
    </>
  )
}

export default App
