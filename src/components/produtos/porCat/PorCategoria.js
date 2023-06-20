import React from 'react'
import Bolsas from './card/Bolsas.png'
import Calçados from './card/calçados.png'
import Calças from './card/Calças.png'
import camiseta from './card/camiseta.png'
import casacos from './card/Casacos.png'
import oculos from './card/oculos.png'

const PorCategoria = () => {

    const arrayAbas = [{
        cat: "Camisetas",
        img: camiseta
        },
        {
        cat: "Bolsas",
        img: Bolsas
        },{
            cat: "Calçados",
            img: Calçados
            },{
                cat: "Calças",
                img: Calças
                },{
                    cat: "Casacos",
                    img: casacos
                    },{
                        cat: "Oculos",
                        img: oculos
                        },];

  return (
    <div className=" sm:w-[640px] lg:w-[1440px]">
        <ul className="sm:content-center ">
            <h2 className="md:mt-[60px] md:text-center md:text-3xl md:font-medium md:mb-[25px] sm:ml-[-250px] lg:ml-[0px] sm:mt-[24px] sm:text-[28px] sm:font-[500] sm:leading-[33.89px]">Busque por categoria:</h2>
            <div className="flex flex-row md:ml-[175px] sm:mt-[20px] flex-wrap">
            {arrayAbas.map((item) => (
                <li key={item.cat} className="border-black m-[15px] cursor-pointer">
                    <img src={item.img} alt="categoria imagem" className="w-[160px] h-[157px]"/>
                    <h6 className="text-base text-white bg-black p-[3px]">{item.cat}</h6>
                </li>
            ))}
            </div>

        </ul>
    </div>
  )
}

export default PorCategoria;
