import React from 'react'

function CardPequenoFlor({ nome , imagem , valor}) {
  return (
    <div className='flor-menor'>
      <img className='img-fundo-flores' src={imagem}/>
    <p  className='nome-flor'>{nome}</p>
   
    <div className='valor-btn'>
      <p className='valor-flor'>{`R$ ${valor}`}</p>
      <a className='btn-selecionar-flor' target='blank' href='https://wa.me/'>Selecionar</a>
    </div>
  </div>

  )
}

export default CardPequenoFlor