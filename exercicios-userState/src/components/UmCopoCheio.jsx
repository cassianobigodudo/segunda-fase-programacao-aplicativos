//todo: Copo meio cheio: Ler um número e informar se ele é positivo, negativo ou nulo.

import { useState } from "react"

let numeroLido


function UmCopoCheio() {

    const [resultado, setResultado] = useState()

    function verificarNumero(){

        numeroLido = Number(prompt('Digite o número que você quer verificar'))

        switch(true){

            case numeroLido >= 1:
                
                setResultado(`Seu número (${numeroLido}) é positivo. `)
                break;
            case numeroLido <= -1:
                setResultado(`Seu número (${numeroLido}) é negativo. `)
                break;
            case numeroLido == 0:
                setResultado(`Seu número (${numeroLido}) é nulo. `)
                break;
            default: 
                setResultado('Você botou uma resposta inválida.')

        }

    }

  return (
    <div>
        <h2>Exercício número seis: Leia um número e veja se ele é positivo, negativo ou nulo!</h2>
        <button onClick={verificarNumero}>Checar</button>
        <h3>{resultado}</h3>
      
    </div>
  )
}

export default UmCopoCheio
