import React, { useState } from 'react'

function Habitantes710() {

    let cont = 0
    const [inputAltura, setInputAltura] = useState()
    const [inputGenero, setInputGenero] = useState()
    const [vetorHabitantes, setVetorHabitante] = useState([])
    let objHabitantes = {
        altura: 0,
        genero: 0
    }

    function registrarHabitante(){



    }

  return (
    <div>
        
        <h1>
            7.10 - Foi feita um a pesquisa entre os habitantes de uma região e 
            coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
            um programa que leia os dados de 10 pessoas e informe: 
            
        </h1>
        <h2><p></p>
            • a maior e a menor altura encontrada; 
            • a média de altura das mulheres; 
            • a média de altura da população; 
            • o percentual de homens na população.</h2>

            <label>Determine a altura em metros da {cont + 1}ª pessoa: </label>
            <input type="number" 
                min={0.25}
                max={2.25}
                step={0.05}
                onChange={(event) => setInputAltura(event.target.value)}    
            />
            <p></p>
            <label>Determine o gênero da {cont + 1}ª pessoa (0=masc/1=fem): </label>
            <input type="number" 
                min={0}
                max={1}
                onChange={(event) => setInputGenero(event.target.value)}    
            />
            <p></p>
            <button onClick={registrarHabitante}>Registrar a {cont + 1}ª pessoa</button>


    </div>
  )
}

export default Habitantes710
