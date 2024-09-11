//todo: DEMOcracia: faça um programa que leia a idade dos candidatos à presidência e de seus vices e depois indique qual chapa acumula mais experiência. Considere que estamos no segundo turno, com duas chapas candidato+vice.

import { useState } from "react"

let idadePresidenteChapaUm, idadeVicePresidenteChapaUm
let idadePresidenteChapaDois, idadeVicePresidenteChapaDois
let somaChapaUm, somaChapaDois


function DemoCracia() {

  const [resultado, setResultado] = useState()

  console.log('testando testando')


  function calcularEXP(){

    idadePresidenteChapaUm = Number(prompt('Qual a idade do presidente da primeira chapa?'))
    console.log(idadePresidenteChapaUm)

    idadeVicePresidenteChapaUm = Number(prompt('Qual a idade do vice-presidente da primeira chapa?'))
    console.log(idadeVicePresidenteChapaUm)

    somaChapaUm = idadePresidenteChapaUm + idadeVicePresidenteChapaUm


    idadePresidenteChapaDois = Number(prompt('Qual a idade do presidente da segunda chapa?'))
    idadeVicePresidenteChapaDois = Number(prompt('Qual a idade do vice-presidente da segunda chapa?'))

    somaChapaDois = (idadePresidenteChapaDois + idadeVicePresidenteChapaDois)


    if(somaChapaUm > somaChapaDois){

      setResultado(`A chapa um tem mais experiência! EXP da chapa um: ${somaChapaUm} || EXP da chapa dois ${somaChapaDois}`)

    }else if(somaChapaDois > somaChapaUm){

      setResultado(`A chapa dois tem mais experiência! EXP da chapa um: ${somaChapaUm} || EXP da chapa dois ${somaChapaDois}`)

    }else{

      setResultado(`Ambas as chapas tem a mesma experiencia! EXP da chapa um: ${somaChapaUm} || EXP da chapa dois ${somaChapaDois}`)

    }

  }


  return (
    <div>
      <h2>Exercício número quatro: Calcule a idade de duas chapas (vice e o presidente) e veja qual chapa tem mais experiência</h2>
      <button onClick={calcularEXP}>Calcular</button>
      <h3>{resultado}</h3>
      
    </div>
  )
}

export default DemoCracia
