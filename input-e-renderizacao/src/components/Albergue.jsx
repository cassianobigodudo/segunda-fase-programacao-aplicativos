//todo 5.7 Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro acabar...Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua única regra e ficar alguns dias por ali. Encontrou um albergue meio bom e fez check in, mas não conseguiu entender de forma alguma como o hotel calculava o valor da conta. Ele é meio burro, vocês sabem...O albergue utilizas faixas de preço de acordo com o número de diárias. Até 5 diárias, o preço por diária é R$100,00;De 6 a 10 diárias, R$90,00 por dia;A partir de 11 dias, sai R$80,00 por dia;Outros fatos relevantes para determinar o valor da conta:- Ele acabou ganhando um desconto a mais de 10% do valor total porque teve um “envolvimento emocional” com a moça que trabalha no balcão;- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a carteirinha da Associação dos motoristas do Uber de Palhoça, entidade com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)de desconto;- Ele se passou e vai pagar multa de R$150 por danos materiais. Criar um programa que lê o número de dias que ele vai ficar no albergue e apresente o valor final da conta e sua composição (os detalhes, pagamentos, descontos...);

import React from 'react'
import { useState } from 'react'
import './Albergue.css'
import DiasErrados from './DiasErrados'
import DiasCertos from './DiasCertos'


function Albergue() {
    let valorDias
    let descontoBalconista
    let descontoConvenio
    let valorFinal
    let multa = 150

    const [inputDiasHospedados, setInputDiasHospedados] = useState()
    // const [valorDiasState, setValorDiasState] = useState()
    // const [valorTotal, setValorTotal] = useState()
    // const [valorDesconto, setValorDesconto] = useState()
    const [diasErrados, setDiasErrados] = useState(false)
    const [diasCorretos, setDiasCorretos] = useState(false)
    // const [multa, setMulta] = useState(150)

    function diasHospedados(event){
        setInputDiasHospedados(Number(event.target.value))
        console.log(event)

    }

    function calcularHospedagem(){

        if(!Number.isInteger(inputDiasHospedados) || inputDiasHospedados < 1){
            
            setDiasErrados(true)
            setDiasCorretos(false)

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

            setValorDiasState(valorDias)
            setValorDesconto(valorFinal - multa)
            setValorTotal(valorFinal)

            
            setDiasCorretos(true)
            setDiasErrados(false)

        }

    }



    return (
    <div className='albergue-container'>

        <DiasCertos
            // valorDiasState={valorDias}
            // valorDesconto ={valorFinal - 150}
            // valorTotal = {valorFinal}
            // multa= {150}
        />

        <div className='texto-container'>
            <h1>Bem vindo ao Albergue do bem, não o do filme!</h1>
            <h2>Promoção: Até 5 diárias, o valor é R$100,00; de 6 a 10 diárias, o valor é R$90,00; de 11 dias em diante, o valor fica R$80,00</h2>
            <p>Digite a quantidade de dias que deseja se hospedar:</p>
        </div>
        
        <div className='inputButton-container'>
            <input type="number" className='diasHospedados'
                value={inputDiasHospedados}
                onChange={diasHospedados}
            /> <br />
            <button onClick={calcularHospedagem}>Calcular a quantidade de dias!</button>
        </div>
        

        <div className='resultado-container'>
            {/* <p>{diasErrados && <DiasErrados/>}</p>
            <p>{diasCorretos && <DiasCertos/>}</p> */}
        </div>
        

      
    </div>
  )
}

export default Albergue
