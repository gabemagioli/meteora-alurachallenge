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
    <div>
        <ul className="content-center">
            <h2 className="mt-[60px] text-center text-3xl font-medium mb-[25px]">Busque por categoria:</h2>
            <div className="flex flex-row ml-[165px] flex-wrap">
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
