import sustentabilidade from './Subtractsustentabilidade.png';
import troca from './Vectortroca.png';
import pix from './Unionpix.png';

function Footer () {
    return(
        <footer className="bg-black lg:h-[238px] sm:w-[374px]  lg:pt-[40px] sm:pt-[32px] flex flex-col mt-[60px]">
            <h2 className="lg:text-[32px] text-white lg:leading-[38.73px] font-[500] sm:text-[24px] ">Conheça todas as nossas facilidades</h2>
            <section className="md:flex md:flex-row lg:mt-[25px] sm:mt-[32px]">
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
    );
}

export default Footer;