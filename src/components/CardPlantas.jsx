


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
            <a href="https://wa.me/" target='blank'>Ver detalhes <img className='img-animada-plantas' src="https://ik.imagekit.io/gabrielySchiller/Projeto-floricultura/icons8-folha-ca%C3%ADda-48.png?updatedAt=1747266619745"   /> </a>
        </div>

    </div>
  )
}

export default CardPlantas