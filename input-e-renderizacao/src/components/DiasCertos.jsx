import React, { useState } from 'react'
// import './Albergue.jsx'


function DiasCertos() {

  const [resultadoFinal, setResultadoFinal] = useState('bla')

  // setResultadoFinal(`Valor dos dias: R$${props.valorDiasState}.\nDesconto de 25% do convênio e da balconista: R$${props.valorFinal - props.multa}.\nMulta por baderna: R$${props.multa}\n\nValor total da hospedagem: R$${props.valorFinal}`)

  setResultadoFinal('oi')

  return (
    <div>
      <label>{resultadoFinal}</label>
    </div>
  )
}

export default DiasCertos
