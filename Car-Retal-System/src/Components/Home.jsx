import Group from '../assets/Group.png'
import blurCar from '../assets/blurCar.png'
import car from '../assets/car.png'
import g3453 from '../assets/g3453.png'
import wallet from '../assets/wallet.png'
import Footer from './ReusableComponents/Footer'
function Home(){
    console.log(blurCar)
    return(
        <>
        <div className='relative z-0  w-full max-w-[1420px] h-[590px]   ml-16  bg-[#5937E0] overflow-hidden '>
            
            <img src={Group} alt="Group"  className='absloute  left-0 top-0 z-20 w-355 '/>
            <img src={blurCar} alt="Car logo" className='absolute z-10 w-[550px] top-[400px] left-[684px] -translate-x-1/2 -translate-y-1/2 rounded'  />
            
            <div className='absolute z-10  left-[100px] top-[150px] w-[650px] h-[503px]  space-y-20 ' >
                <p className='font-Sans text-white font-bold text-[60px] leading-[100%] tracking-[0%]'>Experience the road like never before</p>
                <p className='w-[484px] h-[56px] font-work font-normal text-[16px] leading-[100%] tracking-[0%] text-white'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                <button className='font-inter font-semibold text-[16px] leading-[100%] tracking-[0%] text-white w-[154px] h-[40px] bg-[#FF9E0C] rounded'>view all cars</button>
            </div>
            
        </div>
        <div className="flex flex-row w-[1440px] h-[314px] flex justify-between ml-10 p-[60px_72px_60px_72px] opacity-100">
            <div className="w-[357px] h-[194px] opacity-100  flex flex-col justify-center items-center gap-5">
                <img src={g3453} alt="Location" className='w-[60px] h-[60px]' />
                <p className="font-work font-semibold text-[24px] leading-[100%] tracking-[0%] text-center">Avalibality</p>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-center">
                    Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
                </p>
            </div>
            <div className="w-[357px] h-[194px] opacity-100  flex flex-col justify-center items-center gap-5">
                <img src={car} alt="Car" className='w-[60px] h-[60px]' />
                <p className="font-work font-semibold text-[24px] leading-[100%] tracking-[0%] text-center">Comfort</p>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-center">
                    Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis
                </p>
            </div>
            <div className="w-[357px] h-[194px] opacity-100  flex flex-col justify-center items-center gap-5">
                <img src={wallet} alt="Saving" className='w-[60px] h-[60px]' />
                <p className="font-work font-semibold text-[24px] leading-[100%] tracking-[0%] text-center">Savings</p>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-center">
                    Pretium convallis id diam sed commodo vestibulum lobortis volutpat
                </p>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home