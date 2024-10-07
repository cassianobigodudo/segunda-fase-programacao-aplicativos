import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useState } from 'react'

function Agua() {

    const {bairro} = useContext(GlobalContext)
  return (
    <div className='agua-container'>
        <Navbar/>
      <h1>Água</h1>
      <p>Página muito fluída</p>
      <p>No Bairro {bairro} tem muita água</p>
    </div>
  )
}

export default Agua
