import './Body.css'
import Camisetas from './Camisetas'
import Contador from './Contador'
import LogoFarmarciaBody from './LogoFarmarciaBody'

function Body() {
  return (
    <div className='body-container'>

        <div className='body-esquerda'>

        </div>

        <div className='body-centro'>
            <div className='body-centro-bordas'>
            
                <LogoFarmarciaBody/>
                <Camisetas/>
                <Contador/>

            </div>

        </div>

        <div className='body-direita'>
            
        </div>
      
    </div>
  )
}

export default Body
