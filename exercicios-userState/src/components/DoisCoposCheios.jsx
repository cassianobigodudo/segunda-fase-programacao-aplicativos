//todo: Dois copos meio cheios: Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.

import { useState } from "react"

let verificarNumero

function DoisCoposCheios() {

    const [resultado,setResultado] = useState()

    function averiguar(){

        verificarNumero = Number(prompt('Digite o número que você quer ver se é par e positivo'))

        if (verificarNumero >= 0 && verificarNumero % 2 == 0){

            setResultado(`Seu número (${verificarNumero}) é par e positivo!`)

        }else{

            setResultado(`Seu número (${verificarNumero}) não é par e positivo`) 
        
        }

    }

  return (
    <div>

    <h2>Exercício número sete: Escolha um número e veja se ele é par e positivo ao mesmo tempo</h2>
    <button onClick={averiguar}>Checar!</button>
    <h3>{resultado}</h3>

      
    </div>
  )
}

export default DoisCoposCheios
