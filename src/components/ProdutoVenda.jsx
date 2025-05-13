import React from 'react'
import  imgWhatsapp from '../assets/img/whatsapp.png';



function ProdutoVenda({imagem, nome , descricao , valor}) {
  return (
    <div className='produto-venda'>

        <div className='img-produto'>
            <img width='70px' src={imagem} alt=' imagem produto para jardim'/>
        </div>
       
        <div className='informacoes-produto'>
            <div className='nome-produto'>
                <p>{nome}</p>
            </div>

            <div className='descricao-produto'>
                <p>{descricao}</p>
            </div>
        </div>


        <div className='valor-produto'>
            <p>{` R$ ${valor}`}</p>
        </div>

        <div className='botao-comprar'>
            <a target='blank' href="https://wa.me/"> <img className='img-produtos-jardim' src={imgWhatsapp} alt='Mais informaçoes' />  </a>
        </div>

    </div>
   
  )
}

export default ProdutoVenda