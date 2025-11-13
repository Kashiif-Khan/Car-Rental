import bmwImg from '../assets/bmwImg.png'
import DImg1 from '../assets/DImg1.png'
import DImg2 from '../assets/DImg2.png'
import DImg3 from '../assets/DImg3.png'
// technical spacification

import g17 from '../assets/g17.png'
import g1593 from '../assets/g1593.png'
import gearshift from '../assets/gearshift.png'
import door from '../assets/door.png'
import distance from '../assets/distance.png'
import seat from '../assets/seat.png'

import arrowright from '../assets/arrowright.png'
// equipment
import Frame from '../assets/Frame.png'

import Card  from './ReusableComponents/card.jsx'

function Details(){
    return(
        <>
        
        <div className="w-full h-[880px] border border-red-500 flex flex-row justify-center pt-6 gap-24 ">
            <div className="w-[636px] h-[557px] border border-green-300">
                <div className="w-[636px] h-[437px]">
                    <div className='p-2'>
                        <p className="flex flex-col"><span className="w-[104px] h-[47px] font-Sans font-bold text-[40px] ">BMW</span>  <span><span className="w-[73px] h-[47px] font-Sans font-semibold text-[40px] text-[#5937E0]  ">$25</span> <span className="w-[40px] h-[19px font-Sana text-4">/ day</span> </span></p>
                    </div>
                    <div>
                        <img src={bmwImg} alt=" bmw image" />
                    </div>
                    <div className='w-[636px] h-[100px] flex flex-row gap-8 pl-4'>
                        <img src={DImg1} alt=" d image 1" className='w-[140px] h-[100px]'/>
                        <img src={DImg2} alt=" d image 2" className='w-[140px] h-[100px]'/>
                        <img src={DImg3} alt=" d image 3" className='w-[140px] h-[100px]'/>
                    </div>
                </div>
            </div>
            <div className="w-[636px] h-[740px] border border-green-300">
                <div className='w-[260px] h-[28px]'>
                    <p className='font-Sans font-semibold text-[24px] w-[260px] h-[28px]'>Technical Specification</p>
                </div>
                <div className='w-[636px] h-[320px] grid gird-rows-2 grid-cols-3 mt-20 pl-2 gap-2'>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA] pl-4 pt-4 '>
                        <img src={gearshift} alt=""  className='w-6 h-6'/>
                        <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Gear Box</span> <span className='font-San text-[#00000099] text-4'>Automat</span></p>
                    </div>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA]  pl-4 pt-4 '>
                        <img src={g17} alt="" className='w-6 h-6'/>
                         <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Fuel</span> <span className='font-San text-[#00000099] text-4'>Petrol</span></p>
                    </div>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA]  pl-4 pt-4 '>
                        <img src={door} alt="" className='w-6 h-6'/>
                         <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Doors</span> <span className='font-San text-[#00000099] text-4'>2</span></p>
                    </div>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA]  pl-4 pt-4 '>
                        <img src={g1593} alt="" className='w-6 h-6'/>
                         <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Air Conditioner</span> <span className='font-San text-[#00000099] text-4'>yes</span></p>
                    </div>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA]  pl-4 pt-4 '>
                        <img src={seat} alt="" className='w-6 h-6'/>
                         <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Seats</span> <span className='font-San text-[#00000099] text-4'>5</span></p>
                    </div>
                    <div className='w-[196px] h-[148px] bg-[#FAFAFA]  pl-4 pt-4 '>
                        <img src={distance} alt="" className='w-6 h-6'/>
                         <p className='flex flex-col gap-2'><span className='font-San font-semibold text-4'>Distance</span> <span className='font-San text-[#00000099] text-4'>500</span></p>
                    </div>

                </div>

                <div>
                    <button className='w-[290px] h-[50px] bg-[#5937E0] rounded text-white text-4 font-semibold mt-8 ml-3 hover:bg-blue-300'>Rent a car</button>
                </div>

                <div>
                    <div className='mt-8 ml-3'><p className='font-Sans  font-semibold text-6'>Car Equipments</p></div>
                    <div className='grid grid-row-3 grid-cols-2 h-[106px] w-[636px] mt-8 ml-3'>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>ABS</span></p>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>ABS</span></p>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>Air Bags</span></p>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>Air Bags</span></p>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>Cruise Control</span></p>
                        <p className='flex flex-row gap-2'><img src={Frame} alt="" className='w-6 h-6' /> <span className='font-Sans text-4 text-[#00000099]'>Air Conditioner</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full justify-center items-center px-34'>
            <div className="flex justify-between w-[1296px] h-[118px] opacity-100  mb-[24px] px-24 ">
            <p class="font-work font-bold text-[50px] leading-[100%] tracking-[0%] text-black w-120 ">Other cars</p>
            <button className='font-work font-bold text-[20px] flex items-center mt-16'>view all <img src={arrowright} alt="arrow right" className='w-6' /></button>
            </div>
           <Card/>

        </div>
        </>
    )
}
export default Details