import React from 'react'
import { useState } from 'react'
import './Contador.css'


function Contador() {

    const [cont, setCont] = useState(1000)

    function reduzirContador(){

        setCont(cont-1)

        if(cont < 2){

            setCont(9)
        }

    }


  return (
    <div className='contador-container'>

        <label htmlFor="" className="label-quemSomos">PROMOÇÃO IMPERDÍVEL! AO ZERAR O CONTADOR, A PRIMEIRA COMPRA SAI DE GRAÇA!</label>
        <button onClick={reduzirContador}
        className='button'>{cont}</button>
      
    </div>
  )
}

export default Contador
