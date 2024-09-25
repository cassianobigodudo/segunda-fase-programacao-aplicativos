import React, { useState } from 'react'


function Notas524() {

  const [notaUm, setNotaUm] = useState()
  const [notaDois, setNotaDois] = useState()
  const [resultado, setResultado] = useState()
  let mediaNotas

  function calcularNota(){

    mediaNotas = (Number(notaUm) + Number(notaDois)) / 2

    switch (true){

      case mediaNotas >= 0 && mediaNotas <= 4:
        setResultado('Conceito E')
        break;
      case mediaNotas > 4 && mediaNotas <= 6:
        setResultado('Conceito D')
        break;
      case mediaNotas > 6 && mediaNotas <= 7.5:
        setResultado('Conceito C')
        break;
      case mediaNotas > 7.5 && mediaNotas <= 9:
        setResultado('Conceito B')
        break;
      case mediaNotas > 9 && mediaNotas <= 10:
        setResultado('Conceito A')
        break;
    }

  }
  
  return (
    <div>
      
        <div className="cabecalho-container">
            <h1>Exercício 5.24</h1>
            <h2>Faça um programa que leia duas notas parciais obtidas por um 
              aluno qualquer numa disciplina qualquer ao longo de um semestre 
              qualquer, e calcule a sua média. De posse da média, esta deve ser 
              convertida em conceito que é o novo hype do momento na educação!
              A conversão deve seguir a regra descrita abaixo:
              <p></p>
              Nota Conceito
              Entre 9.0 e 10.0 A |
              Entre 7.5 e 9.0  B |
              Entre 6.0 e 7.5  C |
              Entre 4.0 e 6.0  D |
              Entre 0.0 e 4.0  E |
              O resutado deste programa deve ser um relatório contendo as notas do 
              aluno, sua média e o conceito atingido.</h2>
        </div>

        <div className='inputLabel-container'>
            <label >Digite a primeira nota </label>
            <input type="number" 
                value={notaUm}
                onChange={(event) => setNotaUm(event.target.value)}
                min={0}
                max={10}
            />
            <p></p>
            <label >Digite a primeira segunda </label>
            <input type="number" 
                value={notaDois}
                onChange={(event) => setNotaDois(event.target.value)}
                min={0}
                max={10}
            />
            <p></p>
            <button onClick={calcularNota}>Calcular</button>
        </div>
        <p></p>
        {resultado}

        

    </div>
  )
}

export default Notas524
