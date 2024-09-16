import React from 'react'
import './Albergue.jsx'

function DiasCertos() {
  return (
    <div>
      <label>Valor dos dias: R$${valorDias}.\nDesconto de 25% do convênio e da balconista: R$${valorFinal - multa}.\nMulta por baderna: R$${multa}\n\nValor total da hospedagem: R$${valorFinal}</label>
    </div>
  )
}

export default DiasCertos
