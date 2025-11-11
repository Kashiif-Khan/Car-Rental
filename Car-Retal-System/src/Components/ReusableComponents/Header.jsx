import Vector from '../../assets/Vector.png'
import contact_Icon from '../../assets/contact_Icon.png'
function Header(){
    return(
        <>
       
        <nav className="flex justify-between flex-row item-center w-full h-[104px] top-[28px] right-[312px] left-[312px] bottom-[28px]">
            <div className='flex flex-row'>
            <img src={Vector} alt="logo" className='w-35 h-20'  />
            <h3>Car Rental</h3>
            </div>
            
            <div >
            <ul className='flex flex-row justify-between'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Vehicles</a></li>
                <li><a href="#">Details</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            </div>

            <div>    
            <img src={contact_Icon} alt="logo" className='w-20 bg-green-200'/>

               <h4>Need Help ?</h4>
               <span>+92325 8678962</span> 
            </div>
        </nav>
        </>

    )
}

export default Header