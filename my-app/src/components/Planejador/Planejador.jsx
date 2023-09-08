import React from 'react'
import './planejador.scss'
import garbage from '../../assets/garbage.png'
import pencil from '../../assets/pencil.png'
import add from '../../assets/add.png'
import { Link } from 'react-router-dom'
import Apagar from '../../Mock'


const Planejador = () => {
  return (
    <div className='fondo'>

    <section className='table'>
      <div className='table__titles'>
        <h3>Tarefa</h3>
        <h3>Status</h3>
        <h3>Opções</h3>
      </div>

      <div className='table__line'></div>
      
      <div className='table__tarefas'>
        <p><Apagar/></p>
        
        </div>

        <div className='add'>
          <p>Nova tarefa</p>
        <a>
        <img src={add}/>
        </a>
        </div>
          
      
    </section>
    </div>
  );
}

export default Planejador