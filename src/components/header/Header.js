import LogoLoja from './LogoLoja.png';
import Banner from './banner/BannerLoja';



function Header () {
    return(
        <>
        <header className="lg:flex lg:justify-between lg:p-[17px] lg:bg-black lg:w-w1440 lg:h-custom p-[13px] lg:pl-[23px] lg:flex-row sm:flex sm:flex-col sm:bg-black sm:h-custom sm:justify-between sm:w-[640px]">
            <div className=" lg:pl-[23px] lg:flex lg:flex-row sm:flex sm:flex-col sm:pl[16px]">
                <img src={LogoLoja} alt="Logo-meteora" className="lg:h-8 lg:w-logo lg:ml-[23px] sm:h-[30px] sm:w-[125px] sm:ml-[125px] sm:mt-[-10px] lg:mt-[0px]"/>
                <div className="sm:flex sm:flex-row lg:mt-[-10px] sm:mt-[-10px]">
                    <p className="lg:text-white lg:font-normal lg:text-base lg:pt-[3px] lg:ml-[46px] sm:text-white sm:text-sm sm:m-[10px] sm:ml-[30px] cursor-pointer hover:text-[#DAFF01]">Home</p>
                    <p className="lg:text-white lg:font-normal lg:text-base lg:pt-[3px] lg:ml-[46px] sm:text-white sm:text-sm sm:m-[10px] cursor-pointer hover:text-[#DAFF01]">Nossas Lojas</p>
                    <p className="lg:text-white lg:font-normal lg:text-base lg:pt-[3px] lg:ml-[46px] sm:text-white sm:text-sm sm:m-[10px] cursor-pointer hover:text-[#DAFF01]">Novidades</p>
                    <p className="lg:text-white lg:font-normal lg:text-base lg:pt-[3px] lg:ml-[46px] sm:text-white sm:text-sm sm:m-[10px] cursor-pointer hover:text-[#DAFF01]">Promoções</p>
                </div>
            </div>
            <div className="lg:mr-[23px] lg:mt-[0px] sm:hidden lg:flex">
                <input type="text" placeholder='Digite o produto' className="lg:h-[38px] lg:w-[170px] lg:mt-[-7px] lg:pl-[15px]"/>
                <button className="lg:ml-[23px] lg:border-[1px] lg:border-white lg:text-white lg:p-[5px] lg:w-[85px] lg:h-[38px] lg:mt-[-7px]">Buscar</button>
            </div>
        </header>
            <div className="sm:mr-[23px] sm:mt-[0px] lg:hidden sm:flex sm:p-[20px]">
                <input type="text" placeholder='Digite o produto' className="sm:h-[38px] sm:w-[225.6px] sm:mt-[0px] sm:pl-[15px] sm:ml-[20px] sm:border-solid sm:border-black sm:border-[1px]"/>
                <button className="sm:ml-[7px] sm:border-[1px] sm:border-black sm:text-black sm:p-[5px] sm:w-[85px] sm:h-[38px] sm:mt-[0px]">Search</button>
            </div>
        <Banner/>
        </>
    );
}

export default Header;