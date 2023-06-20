import PorCategoria from "./porCat/PorCategoria";
import bolsa from './card/Bolsabolsa.png'
import camiseta from './card/CamisetacamisetaProd.png'
import calca from './card/Calçacalca.png'
import jaqueta from './card/Jaquetajaqueta.png'
import oculos from './card/oculos.png'
import tenis from './card/Tenistenis.png'


function Produtos () {

    const arrayProdutos = [{
        img: camiseta,
        titulo:'Camiseta Conforto',
        desc:'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
        id: Math.trunc(Math.random() * 10000),
        preco:70.00,
    },
    {
        img: calca,
        titulo:'Calça Alfaiataria',
        desc:'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
        id: Math.trunc(Math.random() * 10000),
        preco:180.00,
    },
    {
        img: tenis,
        titulo:'Tênis Chunky',
        desc:'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
        id: Math.trunc(Math.random() * 10000),
        preco:250.00,
    },
    {
        img: jaqueta,
        titulo:'Jaqueta Jeans',
        desc:'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
        id: Math.trunc(Math.random() * 10000),
        preco:150.00,
    },
    {
        img: oculos,
        titulo:'Óculos Redondo',
        desc:'Armação metálica em grafite com lentes arredondadas. Sem erro!',
        id: Math.trunc(Math.random() * 10000),
        preco:120.00,
    },
    {
        img: bolsa,
        titulo:'Bolsa coringa',
        desc:'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
        id: Math.trunc(Math.random() * 10000),
        preco:120.00,
    }]



    return(
        <>
            <main>
                <PorCategoria/>

                <ul className="content-center">
                    <h2 className="mt-[60px] text-center text-3xl font-medium mb-[25px]">Produtos que estao bombando!</h2>
                    <div className="flex flex-row flex-wrap pl-[165px] pr-[165px]">
                        {arrayProdutos.map((item) => (
                            <li key={item.id} className="flex flex-col justify-evenly w-[350px] h-[615px] m-[15px] border-grey border-[1px] justify-start">
                                <img src={item.img} className="w-[350px] h-[422px]  mt-[-15px]"/>
                                <p className="mr-[215px] w-[145px] text-base leading-[23px] font-bold ml-[16px]">{item.titulo}</p>
                                <p className=" h-[40px] w-[315px] text-[13px] leading-[20px] font-[400]">{item.desc}</p>
                                <p className="mr-[200px] text-[16px] leading-[23px] font-[700]">R$ {item.preco},00</p>
                                <span className="w-[102px] h-[37px] pl-[9px] pr-[9px] pt-[5px] ml-[16px] bg-[#9353FF] text-white cursor-pointer">Ver mais</span>
                            </li>
                        ))}
                     </div>
                </ul>
            </main>
        </>
    );
}

export default Produtos;