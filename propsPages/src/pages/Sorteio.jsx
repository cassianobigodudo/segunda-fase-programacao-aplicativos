import Fenix from '../components/Fenix'
import Titulo from '../components/Titulo'
import './Sorteio.css'
let numeroAleatorio

function Sortear(){

    numeroAleatorio = Math.floor(Math.random() * 101)
    alert(`O número aleatório é ${numeroAleatorio}`)


}

function Sorteio() {
  return (
    <div className='sorteio-container'>
      <Titulo texto={'SORTEIO INSANO'} emoji={'🎲'}/>
      <button className='button-sorteio' onClick={Sortear}>Sortear</button>
      <Fenix/>
    </div>
  )
}

export default Sorteio
