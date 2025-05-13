


function CardPlantas({imagem , nome , valor}) {
  return (
    <div className='card-planta'>
        <div className='img-planta'>
            <img src={imagem} alt=' imagem produto planta' />
        </div>

        <div className='informacoes-planta'>
            <p className='nome-planta'>
              {nome}
            </p>
            <p className='valor-planta'>{`R$ ${valor}`}</p>
        </div>

        <div className='btn-planta'>
            <a href="https://wa.me/" target='blank'>Mais informações <img className='img-animada-plantas'   /> </a>
        </div>

    </div>
  )
}

export default CardPlantas