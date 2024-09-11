
//todo: Faça um programa que receba quatro notas, sendo que cada nota só poderá receber valores de O a 10, calcule e mostre a média ponderada, sabendo que o usuário irá entrar com o peso de cada nota, caso a media ponderada seja: & Media maior ou igual a 7 - ALUNO APROVADO & Media menor que 7 - ALUNO REPROVADO

import { useState } from "react"

function Ponderacao() {

    let notaProva, pesoProva
    let somaNotas = 0, somaPesos = 0
    let mediaFinal

    const [resultado, setResultado] = useState()
    

    function Ponderar(){

        for(let i=0;i<4;i++){

            do{

                notaProva = Number(prompt(`Digite a nota da ${i+1}ª prova `))
                pesoProva = Number(prompt(`Digite o peso da ${i+1}ª prova `))

                if(isNaN(notaProva) || isNaN(pesoProva) || notaProva < 0 || notaProva > 10){

                    alert('Número inválido, tente novamente')
                }

            }while(isNaN(notaProva) || isNaN(pesoProva) || notaProva < 0 || notaProva > 10)

            somaNotas += notaProva * pesoProva
            somaPesos += pesoProva

        }

        mediaFinal = somaNotas / somaPesos

        if(mediaFinal >= 7){

            setResultado(`A média do aluno foi ${(mediaFinal).toFixed(2)}. APROVADO`)

        }else{

            setResultado(`A média do aluno foi ${(mediaFinal).toFixed(2)}. REPROVADO`)
        }

    }

  return (
    <div>
      <h2>Exercício número dois: Pondere 4 notas de um estudante, de a média dele e se ele foi aprovado ou não</h2>
      <button onClick={Ponderar}>Ponderar!</button>
      <h3>{resultado}</h3>
    </div>
  )
}

export default Ponderacao
