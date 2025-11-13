import Group from '../assets/Group.png'
import blurCar from '../assets/blurCar.png'
import car from '../assets/car.png'
import g3453 from '../assets/g3453.png'
import wallet from '../assets/wallet.png'
import mycar from '../assets/mycar.jpg'
import arrowright from '../assets/arrowright.png'
// car images

// Cards car images
import carimg1 from '../assets/carimg1.png'
import carimg2 from '../assets/carimg2.png'
import carimg3 from '../assets/carimg3.png'
import carimg4 from '../assets/carimg4.png'
import carimg5 from '../assets/carimg5.png'
import carimg6 from '../assets/carimg6.png'

import g17 from '../assets/g17.png'
import g1593 from '../assets/g1593.png'
import gearshift from '../assets/gearshift.png'
// Banner IMages
import bannerCar from '../assets/bannerCar.png'
import Group1 from '../assets/Group1.png'
import car7 from '../assets/car7.png'
import speedometer from '../assets/speedometer.png'
import cosutomer from '../assets/coustomer.png'
import YearExperince from '../assets/YearExperince.png'

// 

import googleStore from '../assets/googleStore.png'
import iStore from '../assets/iStore.png'
import phone from '../assets/phone.png'

// 
import lastCar from '../assets/lastCar.png'
import Group2 from '../assets/Group2.png'

function Home(){

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
        <div className="w-[1440px] h-[669px] flex gap-[110px] opacity-100 rotate-0 pt-[60px] pr-[72px] pb-[60px] pl-[158px]">
            <div className='w-[550px] h-[449px]'>
                <img src={mycar} alt="my car" />
            </div>

            <div className='w[550px] space-y-3'> 
                <div className="w-[550px] h-[94px] opacity-100 rotate-0  space-y-2 ">
                    
                   <h1 className="font-['Work_Sans'] font-semibold text-[20px] leading-[100%] tracking-[0] pt-2">
                    <span className="text-white bg-[#5937E0] w-[35px] h-[32px] inline-flex items-center justify-center rounded-[50px] mr-[10px]">
                        1
                    </span>Erat at semper</h1>
                    
                    <p className='line-clamp-2'>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum 
                        dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.
                         Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. 
                         Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
                </div>
                <div className="w-[550px] h-[94px] opacity-100 rotate-0 space-y-2">
                    <h1 className="font-['Work_Sans'] font-semibold text-[20px] leading-[100%] tracking-[0] pt-2">
                    <span className="text-white bg-[#5937E0] w-[35px] h-[32px] inline-flex items-center justify-center rounded-[50px] mr-[10px]">
                        2
                    </span>Urna nec vivamus risus duis arcu </h1>
                    
                    <p className='line-clamp-2'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper </p>
                </div>
                <div className="w-[550px] h-[94px] opacity-100 rotate-0 space-y-2 ">
                    <h1 className="font-['Work_Sans'] font-semibold text-[20px] leading-[100%] tracking-[0] pt-2">
                    <span className="text-white bg-[#5937E0] w-[35px] h-[32px] inline-flex items-center justify-center rounded-[50px] mr-[10px]">
                        3
                    </span>Lobortis euismod imperdiet tempus  </h1>
                    
                    <p className='line-clamp-2'>Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi </p>
                </div>
                <div className="w-[550px] h-[94px] opacity-100 rotate-0 space-y-2 ">
                    <h1 className="font-['Work_Sans'] font-semibold text-[20px] leading-[100%] tracking-[0] pt-2">
                    <span className="text-white bg-[#5937E0] w-[35px] h-[32px] inline-flex items-center justify-center rounded-[50px] mr-[10px]">
                        4
                    </span>Cras nulla aliquet nam eleifend amet et </h1>
                    
                    <p className='line-clamp-2'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero  </p>
                </div>

            </div>

        </div>



        <div className="w-[1440px] h-[1328px] flex flex-col gap-[40px] opacity-100 rotate-0 pt-[60px] pr-[72px] pb-[60px] pl-[72px]">
            <div className="flex justify-between w-[1296px] h-[118px] opacity-100  mb-[24px]">
                <p class="font-work font-bold text-[50px] leading-[100%] tracking-[0%] text-black w-120 ">Choose the car that suits you</p>
                <button className='font-work font-bold text-[20px] flex items-center mt-16'>view all <img src={arrowright} alt="arrow right" className='w-6' /></button>
            </div>

           <div className="grid grid-rows-2 grid-cols-3 gap-[24px] w-[1296px] h-[1050px] opacity-100  ">
                  
                    {/* Card 1 */}
                <div className="w-[416px] h-[513px]   ">
                    <div className=''>
                        <img src={carimg1} alt="Car 1 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Marcedes</p>
                            <p className='font-Sans text-[16px]'>sedan</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$25</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="w-[416px] h-[513px]  ">
                                    
                    <div className=''>
                        <img src={carimg2} alt="Car 2 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Marcedes</p>
                            <p className='font-Sans text-[16px]'>sport</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$50</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                {/* Card 3 */}
                
                <div className="w-[416px] h-[513px]">
                                    
                    <div className=''>
                        <img src={carimg3} alt="Car 3 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Marcedes</p>
                            <p className='font-Sans text-[16px]'>sedan</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$45</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                
                {/* Card 4 */}
                <div className="w-[416px] h-[513px] ">
                                   
                    <div className=''>
                        <img src={carimg4} alt="Car 4 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Porsche</p>
                            <p className='font-Sans text-[16px]'>SUV</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$40</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                
                {/* Card 5 */}
                <div className="w-[416px] h-[513px]  ">
                                   
                    <div className=''>
                        <img src={carimg5} alt="Car 5 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Toyota</p>
                            <p className='font-Sans text-[16px]'>sedan</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$35</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                
                {/* Card 6 */}
                <div className="w-[416px] h-[513px] ">
                                    
                    <div className=''>
                        <img src={carimg6} alt="Car 6 card" />
                    </div>
                    <div className='flex flex-row justify-between items center px-4'>
                        <div>
                            <p className='font-Sans font-semibold text-[24px]'>Porsche</p>
                            <p className='font-Sans text-[16px]'>SUV</p>
                        </div>
                        <div>
                            <p className='font-Sans font-semibold text-[24px] text-[#5937E0]'>$50</p>
                            <p className='font-Sans text-[16px]'>per day</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-4'>
                        <div className='flex flex-row '>
                            <img src={gearshift} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Automat</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g17} alt="pump" className='w-6'/>
                            <p className='font-Sans text-[16px]'>PB 15</p>
                        </div>
                        <div className='flex flex-row '>
                            <img src={g1593} alt="gear" className='w-6'/>
                            <p className='font-Sans text-[16px]'>Air Condition</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-4 px-5'>
                        <button className='w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 '>View Details</button>
                    </div>
                </div>
                </div>
            </div>

            <div className='w-full h-[535px]  flex justify-center items-center'>
                <div className='relative w-[1296px] h-[415px] bg-[#5937E0] rounded overflow-hidden '>
                    <img src={Group1} alt="group 1" className='absolute w-165  z-10' />
                    <img src={bannerCar} alt="Banner Car" className='absolute w-[799px]  left-55 top-12 z-0 mix-blend-multiply ' />
                    <div className='w-[756px] h-[121px] absolute left-1/4 top-8 flex flex-col items-center justify-center '>
                        <p className='text-white font-Sans font-bold text-[45px]'>Facts in numbers</p>
                        <p className='text-white font-Sans  text-[16px] w-[712px] text-center'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</p>
                    </div>
                    <div className='w-full h-[100px] absolute  top-60 flex flex-row justify-around z-30'>
                        <div className='w-[240px] h-[100px] rounded bg-[#ffffff] flex justify-center items-center gap-10'>
                            <div className='w-18 h-16 bg-[#FF9E0C] rounded flex justify-center items-center'>
                             <img src={car7} alt="Car 7" className='w-10'/>
                            </div>
                            <div className='flex flex-col gap-3'>
                            <p className='font-Sans font-bold text-[24px] w-[67px] h-[24px]'>540+</p>
                            <p className='font-Sans font-semibold text-[16px]'>Cars</p>
                            </div>
                        </div>
                        <div className='w-[240px] h-[100px] rounded bg-[#ffffff] flex justify-center items-center gap-10'>
                            <div className='w-18 h-16 bg-[#FF9E0C] rounded flex justify-center items-center'>
                                <img src={cosutomer} alt="coustomer" className='w-10'/>
                            </div>
                            <div className='flex flex-col gap-3'>
                            <p className='font-Sans font-bold text-[24px] w-[67px] h-[24px]'>20k+</p>
                            <p className='font-Sans font-semibold text-[16px]'>Costumers</p>
                            </div>
                        </div>
                        <div className='w-[240px] h-[100px] rounded bg-[#ffffff] flex justify-center items-center gap-10'>
                            <div className='w-18 h-16 bg-[#FF9E0C] rounded flex justify-center items-center'>
                                <img src={YearExperince} alt="year" className='w-10' />
                            </div>
                            <div className='flex flex-col gap-3'>
                            <p className='font-Sans font-bold text-[24px] w-[67px] h-[24px]'>25+</p>
                            <p className='font-Sans font-semibold text-[16px]'>Years</p>
                            </div>
                        </div>
                        <div className='w-[240px] h-[100px] rounded bg-[#ffffff] flex justify-center items-center gap-10'>
                            <div className='w-18 h-16 bg-[#FF9E0C] rounded flex justify-center items-center'>
                                <img src={speedometer} alt="speedometer" className='w-10' />
                            </div>
                            <div className='flex flex-col gap-3'>
                            <p className='font-Sans font-bold text-[24px] w-[67px] h-[24px]'>20m+</p>
                            <p className='font-Sans font-semibold text-[16px]'>Miles</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='w-full h-[630px]  flex flex-row justify-between px-30'>
                <div className=' '>
                    <div className='mt-20'>
                        <p className='font-Sans font-bold text-[50px] w-[313px] h-[118px]'>Download mobile app</p>
                        <p className='font-Sans font-semibold text-[16px] w-[530px] h-[100px] mt-14 '>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna</p>
                    </div>  
                    <div className='w-[386px] h-[50px] flex flex-row justify-between items-center mt-14'>
                        <button className='bg-black w-[173px] h-[50] flex flex-row p-2 rounded'>
                             <img src={iStore} alt="apple logo" className='w-6 h-8' />
                             <p className='text-white flex flex-col'> <span className='w-[99px] h-2 text-[10px]'>download on the</span>  <span className='w-[108px] h-[23px]'>App Store</span> </p>
                        </button>
                        <button className='bg-black w-[173px] h-[50] flex flex-row p-2 rounded'>
                             <img src={googleStore} alt="google play" className='w-6 h-8' /> 
                             <p className='text-white flex flex-col'> <span className='w-[99px] h-2 text-[10px] '>GIT IT ON</span>  <span className='w-[108px] h-[23px]'> Google Play</span> </p>
                        </button>
                    </div>  
                    
                 </div>

                 <div className=' relative w-[427px] h-[577px]  '>
                    <img src={phone} alt="phone 1" className='absolute w-[267px] h-[540px] top-[70px]'/>
                    <img src={phone} alt="phone 2" className='absolute w-[267px] h-[540px] left-[50px]'/>
                    

                 </div>

            </div>

            <div className='w-full h-[535px] flex justify-center items-center'>
                <div className='relative w-[1296px] h-[415px] rounded bg-[#5937E0] '>
                    <img src={Group2} alt="group 2" className='absolute w-[800px] h-[148px] top-20 ' />
                    <img src={lastCar} alt=" last car" className='absolute w-[365px] h-[237px] top-1/3 left-[780px]'/>

                    <div>
                        <div className='w[756px] h-[160px] mt-20 ml-24'>
                            <p className='font-Sans font-bold text-[50px] text-white w-[700px] h-[160px] '>Enjoy every mile with adorable companionship.</p>
                        </div>
                        <div className='w[550px] h-[42px]  ml-24'>
                            <p className='font-Sans font-semibold text-[16px] text-white w-[520px] h-[42px] p-0 '>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat</p>

                            <div className='w-[464px] h-[60px] rounded bg-white flex justify-center items-center mt-6 px-2'>
                                <input type="search" name="" id="" placeholder='City' className='flex-grow text-gray-500 text-[16px] font-inter outline-none  bg-transparent px-2 w-[350px]' />
                                <button className='bg-[#FFA500] text-white font-semibold text-[16px] rounded-full px-6 py-2 hover:bg-[#ff8c00] transition'>search</button>
                           
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>




        </>
    )
}
export default Home