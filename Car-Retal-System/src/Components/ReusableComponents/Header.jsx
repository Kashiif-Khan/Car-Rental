import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import contact_Icon from '../../assets/contact_Icon.png';
function Header(){
    return(
        <>
       
        <nav className="flex  w-full h-26 justify-between py-7 px-16 opacity-100 rotate-0">
            <div className='flex flex-row gap-5  justify-center items-center h-12 w-45 '>
            <img src={Vector} alt="logo" className='w-11 h-7 top-2 left-1 opacity-100 rotate-0'  />
            <h3 className='w-20 h-5 font-inter font-bold text-base leading-[100%] tracking-normal left- '>Car Rental</h3>
            </div>
            
            <div className='flex justify- items-center' >
            <ul className='flex flex-row gap-10 '>
                <li className='font-inter font-medium text-[18px] leading-[100%] tracking-normal hover:font-bold transition-all duration-200'><Link to="/">Home</Link> </li>
                <li className='font-inter font-medium text-[18px] leading-[100%] tracking-normal hover:font-bold transition-all duration-200'><Link to="/vehicles">Vehicles</Link></li>
                <li className='font-inter font-medium text-[18px] leading-[100%] tracking-normal hover:font-bold transition-all duration-200'><Link to="/details">Details</Link></li>
                <li className='font-inter font-medium text-[18px] leading-[100%] tracking-normal hover:font-bold transition-all duration-200'><Link to="/about">About Us</Link></li>
                <li className='font-inter font-medium text-[18px] leading-[100%] tracking-normal hover:font-bold transition-all duration-200'><Link to="/contact">Contact Us</Link></li>
            </ul>
            </div>

            <div className='flex justify-center items-center flex-row gap-2'>

               <div>
                <img src={contact_Icon} alt="logo" className='bg-[#5937E0] rounded-full p-2 w-10 h-10 rotate-0 opacity-100 top-2 left-2  '/>
               </div>
               <div>
               <p className='font-sans font-normal text-base leading-6 tracking-normal'>Need Help ?</p>
               <span className='font-sans font-semibold text-base leading-6 tracking-normal'>+92325 8678962</span> 
               </div>
            </div>
        </nav>
        </>

    )
}

export default Header