import sustentabilidade from './Subtractsustentabilidade.png';
import troca from './Vectortroca.png';
import pix from './Unionpix.png';

function Footer () {
    return(
        <>
        <footer className="bg-black lg:w-[1440px] lg:h-[238px] sm:w-[374px] sm:w-[455px] lg:pt-[40px] sm:pt-[32px] flex flex-col mt-[60px]">
            <h2 className="lg:text-[32px] text-white lg:leading-[38.73px] font-[500] sm:text-[24px] ">Conheça todas as nossas facilidades</h2>
            <section className="md:flex md:flex-row lg:mt-[25px] sm:mt-[32px] sm:ml-[-45px]">
                <div className="flex flex-row sm:mb-[32px]">
                    <img src={pix} alt="forma de pagamento" className="lg:ml-[232px] lg:mt-[35px] w-[72px] h-[72px] sm:ml-[60px]"/>
                    <div className="flex flex-col">
                        <p className="text-[16px] leading-[23px] text-[#DAFF01] font-[700] ml-[-25px] lg:mt-[23px]">PAGUE PELO PIX</p>
                        <p className="font-[400] text-white text-[13px] leading-[20px] w-[200px] mt-[25px] ml-[23px]">
                            Ganhe 5% OFF em pagamentos via PIX
                        </p>
                    </div>
                </div>
                <div className="flex flex-row sm:mb-[32px]">
                    <img src={troca} alt="forma de pagamento" className="ml-[60px] mt-[35px] w-[69.45px] h-[54px]"/>
                    <div className="flex flex-col">
                        <p className="text-[16px] leading-[23px] text-[#DAFF01] font-[700] ml-[-50px] mt-[23px]">TROCA GRÁTIS</p>
                        <p className="font-[400] text-white text-[13px] leading-[20px] w-[200px] mt-[25px] ml-[23px]">
                        Fique livre para trocar em até 30 dias.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row sm:mb-[32px]">
                    <img src={sustentabilidade} alt="forma de pagamento" className="ml-[60px] mt-[35px] w-[72px] h-[72px]"/>
                    <div className="flex flex-col">
                        <p className="text-[16px] leading-[23px] text-[#DAFF01] font-[700] ml-[-25px] mt-[23px]">SUSTENTABILIDADE</p>
                        <p className="font-[400] text-white text-[13px] leading-[20px] w-[200px] mt-[25px] ml-[23px]">
                        Moda responsável, que respeita o meio ambiente.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
        <form className="border-black border-solid border-[1px] p-6 md:mt-[60px] md:w-[900px] sm:w-[350px] md:ml-[260.5px] sm:ml-[30px] sm:mt-[60px] mb-[60px]">
        <label htmlFor="cadastro"><h5 className="md:font-[500] md:text-[20px] md:leading-[24.2px] md:justify-center">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se!</strong></h5>
        </label>
        <div className="flex flex-row justify-center">
            <input type="text"  id="cadastro" placeholder="Digite seu email" className="p-[10px] border-black border-r-0 border-solid border-[1px] mt-[24px] md:h-[38px] sm:h-[38px] md:w-[500px] md:mb-[17px] sm:w-[234px]"/>
            <span className="text-white p-[8px] bg-[#9353FF] mt-[24px] h-[38px] md:w-[84px]">Enviar</span>
        </div>
        </form>
        </>
    );
}

export default Footer;