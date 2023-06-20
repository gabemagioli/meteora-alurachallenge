import LogoLoja from './LogoLoja.png';
import Banner from './banner/BannerLoja';



function Header () {
    return(
        <>
        <header className="flex justify-between p-[17px] bg-black w-w1440 h-custom p-[13px] pl-[23px] flex flex-row">
            <div className=" pl-[23px] flex flex-row">
                <img src={LogoLoja} alt="Logo-meteora" className="h-8 w-logo"/>
                <p className="text-white font-normal text-base pt-[3px] ml-[46px]">Home</p>
                <p className="text-white font-normal text-base pt-[3px] ml-[46px]">Nossas Lojas</p>
                <p className="text-white font-normal text-base pt-[3px] ml-[46px]">Novidades</p>
                <p className="text-white font-normal text-base pt-[3px] ml-[46px]">Promoções</p>
            </div>
            <div className="mr-[23px] mt-[-5px]">
                <input type="text" placeholder='Digite o produto' className="h-[38px] w-[170px] mt-[-7px] pl-[15px]"/>
                <button className="ml-[23px] border-[1px] border-white text-white p-[5px] w-[85px]">Buscar</button>
            </div>
        </header>
        <Banner/>
        </>
    );
}

export default Header;