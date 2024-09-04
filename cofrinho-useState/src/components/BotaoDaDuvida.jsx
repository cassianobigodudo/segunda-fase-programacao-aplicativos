import React, { useState } from 'react';

function BotaoDaDuvida() {

    const [label, setLabel] = useState('Olá');

    function Ola(){

        if(label == 'Olá'){

            setLabel('Tchau')

        }else{

            setLabel('Olá')
        }

    }


  return (
    <div>
        <h2>Teste: {label}</h2>
        <button onClick={Ola}>Duvidar</button>
    </div>
  )
}

export default BotaoDaDuvida
