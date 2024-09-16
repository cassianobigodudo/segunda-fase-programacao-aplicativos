//todo 5.7 Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro acabar...Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua única regra e ficar alguns dias por ali. Encontrou um albergue meio bom e fez check in, mas não conseguiu entender de forma alguma como o hotel calculava o valor da conta. Ele é meio burro, vocês sabem...O albergue utilizas faixas de preço de acordo com o número de diárias. Até 5 diárias, o preço por diária é R$100,00;De 6 a 10 diárias, R$90,00 por dia;A partir de 11 dias, sai R$80,00 por dia;Outros fatos relevantes para determinar o valor da conta:- Ele acabou ganhando um desconto a mais de 10% do valor total porque teve um “envolvimento emocional” com a moça que trabalha no balcão;- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a carteirinha da Associação dos motoristas do Uber de Palhoça, entidade com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)de desconto;- Ele se passou e vai pagar multa de R$150 por danos materiais. Criar um programa que lê o número de dias que ele vai ficar no albergue e apresente o valor final da conta e sua composição (os detalhes, pagamentos, descontos...);

import React from 'react'
import { useState } from 'react'
import './Albergue.css'

let valorDias
let descontoBalconista
let descontoConvenio
let valorFinal
let multa = 150

function Albergue() {

    const [inputDiasHospedados, setInputDiasHospedados] = useState()
    const [valorTotal, setValorTotal] = useState()

    function diasHospedados(event){
        setInputDiasHospedados(Number(event.target.value))
        console.log(event)

    }

    function calcularHospedagem(){

        if(!Number.isInteger(inputDiasHospedados) || inputDiasHospedados < 1){
            
            console.log(Number.isInteger(inputDiasHospedados))
            setValorTotal('Não foi possível fazer sua hospedagem, número de dias inválido!')

        }else{
            console.log(Number.isInteger(inputDiasHospedados))
            switch (true){

                case inputDiasHospedados <= 5:

                    valorDias = inputDiasHospedados * 100
                    break;
                case inputDiasHospedados <= 10:

                    valorDias = inputDiasHospedados * 90
                    break;
                case inputDiasHospedados >= 11:

                    valorDias = inputDiasHospedados * 80
                    break;
            }

            descontoBalconista = (valorDias * 10) / 100
            descontoConvenio = (valorDias * 15) / 100
            valorFinal = valorDias - descontoBalconista - descontoConvenio
            valorFinal += multa

            setValorTotal(`Valor dos dias: R$${valorDias}.\nDesconto de 25% do convênio e da balconista: R$${valorFinal - multa}.\nMulta por baderna: R$${multa}\n\nValor total da hospedagem: R$${valorFinal}.`)

        }

    }



    return (
    <div>

        <h1>Bem vindo ao Albergue do bem, não o do filme!</h1>
        <h2>Promoção: Até 5 diárias, o valor é R$100,00; de 6 a 10 diárias, o valor é R$90,00; de 11 dias em diante, o valor fica R$80,00</h2>
        <p>Digite a quantidade de dias que deseja se hospedar:</p>
        <input type="number" className='diasHospedados'
            value={inputDiasHospedados}
            onChange={diasHospedados}
        /> <br />
        <button onClick={calcularHospedagem}>Calcular a quantidade de dias!</button>
    
        <p>{valorTotal}</p>

      
    </div>
  )
}

export default Albergue
