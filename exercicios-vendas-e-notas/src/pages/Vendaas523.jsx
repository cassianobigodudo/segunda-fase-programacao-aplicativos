import React, { useState } from 'react'

function Vendaas523() {

    

    const [inputValor, setInputValor] = useState()
    const [resultado, setResultado] = useState()
    
    

    function calcularValor(){

        if(inputValor <= 0){

            setResultado('Não é possível calcular, preço indisponível')

        }else{



        }

    }

  return (
    <div>
      
        <div className="cabecalho-container">
            <h1>Exercício 5.23</h1>
            <h2>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
            45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
            será de 30%. Faça um programa que entre com o valor do produto e mostre 
            o valor de venda.</h2>
        </div>

        <div className='inputLabel-container'>
            <label >Digite o valor do produto: </label>
            <input type="number" 
                value={inputValor}
                onChange={(event) => setInputValor(event.target.value)}
            />
            <p></p>
            <button onClick={calcularValor}>Calcular</button>
        </div>
        <p></p>
        {resultado}

    </div>
  )
}

export default Vendaas523
