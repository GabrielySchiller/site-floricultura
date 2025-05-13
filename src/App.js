
import '../src/styles/AppResponsive.css'
import '../src/styles/App.css';
import React, {useState} from 'react';

import imgHome from '../src/assets/img/flores-fundo-home.jpg';
import imgPromocao from '../src/assets/img/promocao.png';
import  imgWhatsapp from '../src/assets/img/whatsapp.png';
import imgLocalizacao from '../src/assets/img/pino-de-localizacao.png'

import ProdutoVenda from './components/ProdutoVenda.jsx';
import CardPequenoFlor from './components/CardPequenoFlor.jsx';
import CardPlantas from './components/CardPlantas.jsx';

import { flores } from '../src/assets/produtos/Flores.js';
import {produtosJardim} from '../src/assets/produtos/Decoracao.js';
import { plantasOrnamentais } from '../src/assets/produtos/Plantas.js';

function App() {

  const [mostrarMais, setMostrarMais] = useState(false);

  function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-mobile');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
   }

 

  return (
  <div className="Body">
     
      <header className='header-mobile'>

          <div className='logo'>
            <p className='nome-loja'> Floricultura Primavera</p>
           </div>


           <div class="menu-toggle" onClick={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="menu-mobile">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#decoracao"> Jardim</a></li>
                <li><a href="#flores">Flores</a></li>
                <li><a href="#plantas">Plantas Ornamentais</a></li>
                <li> <a href='https://wa.me/'> Contato</a></li>
            </ul>
        </nav>
      </header>


      <section id='home'>

        <div className='elements-home'>

          <div className='texts-home'>
            <p className='slogam'>Flores para cada ocasião, beleza que <br/>  floresce com você!</p>
            
            <div className='btns-home'>
               <a className='btn-contato-home' href='https://wa.me/' target='blank'> Entre em contato conosco <img className='img-contato-home' src={imgWhatsapp} alt='' /> </a>
               <a className='btn-contato-home' target='blank' href='https://maps.app.goo.gl/74bzHnjRuzmfsta96'>Nossa localização <img className='img-contato-home' src={imgLocalizacao} alt='' />  </a>
            </div>
          </div>

          <div className='img-home'>
            <img src={imgHome} alt='foto de flor' />         
         </div>
        
        </div>
      </section>

      
      
      <section id='decoracao'>
           <div className='title-decoracao'>
            <h2> Para o Jardim </h2>
           </div>

           <div className='produtos-venda-decoracao'>
           { (mostrarMais ? produtosJardim : produtosJardim.slice(0 , 7)).map((jardim) =>(

             <ProdutoVenda
              key={jardim.id}
               nome={jardim.nome} 
               imagem={jardim.imagem} 
              valor={jardim.valor} 
              descricao={jardim.descricao}
             />
            ))}
           
             
           </div>

           <div className='ver-mais'>
            {!mostrarMais && (
              <button
               className='btn-ver-mais' 
               onClick={() => setMostrarMais(true) } > Ver mais <img className='img-animada-ver-mais'   /> </button>
            )}

           </div>
      </section>




      
      
    <section id='flores'>
        <div className='title-flores'>
          <p className='title-flores-icon' >Flores com <span className='span-flor'> 20%  OFF </span> <img src={imgPromocao} /> </p>
          <p className='border-bottom'></p>
        </div>


        <div className='container-flores'>
          
          <div className='box-maior'>
            
            <div className='flor-maior'>
              <p className='nome-flor'>Tulipa Amarela</p>
              <img className='img-maior' src='https://ik.imagekit.io/gabrielySchiller/Projeto-floricultura/tulipa-amarela.jpg?updatedAt=1745360233382' alt='imagem produto flor' />
             
              <div className='valor-btn'>
                  <p className='valor-flor'>12,00</p>
                  <a className='btn-selecionar-flor' target='blank' href='https://wa.me/'>Selecionar</a>
                </div>

            </div>
          </div>

          <div className='box-menor'>

            <div className='box-superior'>
               
             {flores.map((flor) => (
               <CardPequenoFlor 
                key={flor.id}
                 nome={flor.nome} 
                 imagem={flor.imagem} 
                valor={flor.valor} 
               />
              ))}
            </div>

        </div>

      </div>
    </section>

           

           
          

            
    <section id='plantas'>

      <div className='title-plantas'>
        <p>Plantas Ornamentais</p>
      </div>

      <div className='container-plantas'>

      {plantasOrnamentais.map((planta) => (
               <CardPlantas
                key={planta.id}
                 nome={planta.nome} 
                 imagem={planta.imagem} 
                valor={planta.valor} 
               />
              ))}
        
      </div>

    </section>
        





      <footer> 
        <div className='informacoes-rodape'>
         <p className='contato'> <a target='blank' href='https://wa.me/'> <img className='img-contato-footer' src={imgWhatsapp} alt='' /> +55 539999999  </a></p>
         <p className='endereco'> <img className='img-contato-footer' src={imgLocalizacao} alt='' />  Rua das Acácias, Pelotas, RS</p>

        </div>
        
        <div className='creditos'>
          <p>Fotos dos produtos criadas com IA</p> /
          <p>Icones do Freepik</p>  /
          <p> Foto home de <a href="https://unsplash.com/pt-br/@mtresemer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Michelle Tresemer</a> </p>
          /
          <a href="https://br.freepik.com/fotos-gratis/foto-vertical-de-tulipas-amarelas-lado-a-lado_11183367.htm#fromView=keyword&page=1&position=8&uuid=35304be7-3504-42b9-b15b-ede7a5291e6c&query=Tulipa+Amarela">Imagem de wirestock no Freepik</a>

        </div>
      </footer>
    </div>
  );
}

export default App;






       
     
       
        
