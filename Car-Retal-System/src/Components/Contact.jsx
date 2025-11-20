import clock from '../assets/clock.png'
import ContactIcon from '../assets/ContactIcon.png'
import mail from '../assets/mail.png'
import mappin from '../assets/mappin.png'

import Cimage1 from '../assets/Cimage1.png'
import Cimage2 from '../assets/Cimage2.png'
import Cimage3 from '../assets/Cimage3.png'
import Logocomp from '../Components/ReusableComponents/Logocomp'
import Ctopimage from '../assets/Ctopimage.png'
import Form from './ReusableComponents/FormComp'

function Contact(){
    return(
        <>
        {/* 1 */}
        <div className="w-full h-[240px] flex flex-col justify-center items-center gap-5 ">
            <p className="font-Sans font-bold text-[50px]">Contact Us</p>
            <p className="font-Sans text-[20px]"> <span className="text-[#9B9B9B]">Home / </span> <span>Contact Us</span></p>
        </div>
        {/* hero missing 2 */}

        <div className='flex justify-center items-center'>
            <div className='w-[416px] '>
                <Form/>
            </div>
            <div>
                <img src={Ctopimage} alt="" className='w-[856px]' />
            </div>
        </div>

        {/* 3 */}
        <div className=" flex justify-around px-14 mt-12">
            <div className="  flex gap-4">
                <img src={mappin} alt="" className='bg-[#FF9E0C] rounded-full w-16 p-5'/>
                <p className='font-Sans flex flex-col gap-1'> <span className='text-[20px]'>Address</span> <span className='font-semibold text-[20px]'>Oxford Ave. Cary, NC 27511</span> </p>
            </div>
            <div className="  flex gap-4">
                <img src={mail} alt="" className='bg-[#FF9E0C] rounded-full w-16 p-5'/>
                <p className='font-Sans flex flex-col gap-1'> <span className='text-[20px]'>Email</span> <span className='font-semibold text-[20px]'>nwiger@yahoo.com</span> </p>
            </div>
            <div className="flex gap-4">
                <img src={ContactIcon} alt="" className='bg-[#FF9E0C] rounded-full w-16 p-5' />
                <p className='font-Sans flex flex-col gap-1'> <span className='text-[20px]'>Phone</span> <span className='font-semibold text-[20px]'>+537 547-6401</span> </p>
            </div>
            <div className="  flex gap-4">
                <img src={clock} alt="" className='bg-[#FF9E0C] rounded-full w-16 p-5' />
                <p className='font-Sans flex flex-col gap-1'> <span className='text-[20px]'>Opening hours</span> <span className='font-semibold text-[20px]'>Sun-Mon: 10am - 10pm</span> </p>
            </div>


        </div>
        <div className='mt-16'>
            <div className='flex justify-center'>
                <p className='font-Sans font-bold text-[50px]'>Latest blog posts & news</p>
            </div>
            <div className='flex justify-around px-4 mt-8 '> 
                <div className=''>
                    <img src={Cimage1} alt=""  className='w-[416px]'/>
                    <p className='font-Sans font-semibold text-[20px] mt-4'>How to choose the right car</p>
                    <p className='font-Sans text-[#00000099] mt-4'>News / 12April 2024</p>
                </div>
                <div>
                     <img src={Cimage2} alt=""  className='w-[416px]'/>
                    <p className='font-Sans font-semibold text-[20px] mt-4'>Which plan is right for me?</p>
                    <p className='font-Sans text-[#00000099] mt-4'>News / 12April 2024</p>
                </div>
                <div>
                     <img src={Cimage3} alt=""  className='w-[416px]'/>
                    <p className='font-Sans font-semibold text-[20px] mt-4'>Enjoy Speed, Choice & Total Control</p>
                    <p className='font-Sans text-[#00000099] mt-4'>News / 12April 2024</p>
                </div>

            </div>
        </div>
        <Logocomp/>
        </>
    )
}
export default Contact