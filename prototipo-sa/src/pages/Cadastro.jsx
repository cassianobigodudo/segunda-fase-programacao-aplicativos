import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Cadastro.css'

function Cadastro() {
    const [inputNomeCompletoCadastro, setInputNomeCompletoCadastro]=useState()
    const [inputApelidoCadastro, setInputApelidoCadastro]=useState()
    const [inputEmailCadastro, setInputEmailCadastro]=useState()
    const [inputSenhaCadastro, setInputSenhaCadastro]=useState()
    
  return (
    <div >
        <Navbar/>
        <h1>Cadastre-se</h1>
        <p>Nome Completo:</p>
        <input type="text" 
        placeholder='Nome Completo'
        value={inputNomeCompletoCadastro}
        onChange={(event) => setInputNomeCompletoCadastro(event.target.value)}/>
        <p>Apelido:</p>
        <input type="text" 
        placeholder='Apelido'
        value={inputApelidoCadastro}
        onChange={(event) => setInputApelidoCadastro(event.target.value)}/>
        <p>Email:</p>
        <input type="email" 
        placeholder='Email'
        value={inputEmailCadastro}
        onChange={(event) => setInputEmailCadastro(event.target.value)}/>
        <p>Senha:</p>
        <input type="password" 
        placeholder='Senha'
        value={inputSenhaCadastro}
        onChange={(event) => setInputSenhaCadastro(event.target.value)}/>
        
    </div>
  )
}

export default Cadastro
