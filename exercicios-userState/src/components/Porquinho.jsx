import { useState } from 'react';

let umCentavoValor = 1
let cincoCentavosValor = 5
let dezCentavosValor = 10
let vintecincoCentavosValor = 25
let cinquentaCentavoValor = 50

let umCentavoQtd
let cincoCentavosQtd
let dezCentavosQtd
let vintecincoCentavosQtd
let cinquentaCentavoQtd

let dinheiroTotal
let valorCompra

function Porquinho() {

    const [resultado, setResultado] = useState()

    function CalcularMoedas(){

        valorCompra = Number(prompt('Valor da compra:'))
        umCentavoQtd = Number(prompt('Quantidade de moedas de um centavo:'))
        cincoCentavosQtd = Number(prompt('Quantidade de moedas de cinco centavos:'))
        dezCentavosQtd = Number(prompt('Quantidade de moedas de dez centavos:'))
        vintecincoCentavosQtd = Number(prompt('Quantidade de moedas de vinte e cinco centavos:'))
        cinquentaCentavoQtd = Number(prompt('Quantidade de moedas de cinquenta centavos:'))

        dinheiroTotal = (umCentavoQtd * umCentavoValor + cincoCentavosQtd * cincoCentavosValor + dezCentavosQtd * dezCentavosValor + vintecincoCentavosQtd * vintecincoCentavosValor + cinquentaCentavoQtd * cinquentaCentavoValor) / 100

        alert(dinheiroTotal)

        if (dinheiroTotal >= valorCompra){

            setResultado(`Sua compra foi aprovada! Troco: Cr$ ${(dinheiroTotal-valorCompra).toFixed(2)}`)

        }else{

            setResultado(`Não foi possível fazer a comprar! Lhe falta Cr$ ${(valorCompra-dinheiroTotal).toFixed(2)}`)
        }

    }


  return (
    <div>
      <h2>Exercício número um: Quebre o cofrinho e conte quantas moedas tem, e veja se voce consegue comprar o que voce quer</h2>
      <button onClick={CalcularMoedas}>Quebrar!</button>
      <h3>{resultado}</h3>
    </div>
  )
}

export default Porquinho
