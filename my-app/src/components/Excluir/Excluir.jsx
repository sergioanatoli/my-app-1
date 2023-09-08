import React from 'react'
import './excluir.scss'
import { db } from '../../Mock'
import{ useParams } from'react-router-dom'; 


const Excluir = () => {
  const{ id } = useParams(); 

  const selectedItem = db.find(item => item.id === parseInt(id));


  return (
    <div className='fondoExcluir'>

      <section className='table'>
      <h3>Deseja excluir esse item?</h3>
      <h4>{selectedItem.description}</h4>
      <div className='botoes'>
      <button className='botao1'>Não</button>
      <button className='botao2'>Sim</button>
      </div>
      </section>

    </div>
  )
}

export default Excluir;