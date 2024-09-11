//todo: Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.

import { useState } from "react"

function ArcoDeSonado() {
    const [inputCelsius, setInputCelsius] = useState()
    const [fahrenheit, setFahrenheit] = useState()

    function mudouCelsius(event){
        console.log(event)
        setInputCelsius(event.target.value)

    }

    function converterCparaF(){
      let f = inputCelsius * 1.8 + 32
      setFahrenheit(`Temperatura em graus F°: ${f.toFixed(2)}`)

    }

  return (
    <div>
      <h2>Exercício número três: Transforme a temperatura desejada em graus Celsius</h2>
      <input type="text" className="entrada"
        value={inputCelsius} 
        onChange={mudouCelsius} 
      />
      
      <p>{'Mudança instantânea para F°:' + (inputCelsius * 1.8 + 32).toFixed(2)}</p>
      <p>{fahrenheit}</p>

      <button onClick={converterCparaF}>Converta</button>
    </div>
  )
}

export default ArcoDeSonado
