import carimg1 from "../../assets/carimg1.png";
import carimg2 from "../../assets/carimg2.png";
import carimg3 from "../../assets/carimg3.png";
import carimg4 from "../../assets/carimg4.png";
import carimg5 from "../../assets/carimg5.png";
import carimg6 from "../../assets/carimg6.png";

import g17 from "../../assets/g17.png";
import g1593 from "../../assets/g1593.png";
import gearshift from "../../assets/gearshift.png";
function Card() {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-3 gap-[24px] w-[1296px] h-[1050px]  px-14 ">
        {/* Card 1 */}
        <div className="w-[416px] h-[513px]   ">
          <div className="">
            <img src={carimg1} alt="Car 1 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Marcedes</p>
              <p className="font-Sans text-[16px]">sedan</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $25
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-[416px] h-[513px]  ">
          <div className="">
            <img src={carimg2} alt="Car 2 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Marcedes</p>
              <p className="font-Sans text-[16px]">sport</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $50
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>
        {/* Card 3 */}

        <div className="w-[416px] h-[513px]">
          <div className="">
            <img src={carimg3} alt="Car 3 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Marcedes</p>
              <p className="font-Sans text-[16px]">sedan</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $45
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[416px] h-[513px] ">
          <div className="">
            <img src={carimg4} alt="Car 4 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Porsche</p>
              <p className="font-Sans text-[16px]">SUV</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $40
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[416px] h-[513px]  ">
          <div className="">
            <img src={carimg5} alt="Car 5 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Toyota</p>
              <p className="font-Sans text-[16px]">sedan</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $35
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-[416px] h-[513px] ">
          <div className="">
            <img src={carimg6} alt="Car 6 card" />
          </div>
          <div className="flex flex-row justify-between items center px-4">
            <div>
              <p className="font-Sans font-semibold text-[24px]">Porsche</p>
              <p className="font-Sans text-[16px]">SUV</p>
            </div>
            <div>
              <p className="font-Sans font-semibold text-[24px] text-[#5937E0]">
                $50
              </p>
              <p className="font-Sans text-[16px]">per day</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-6 py-4">
            <div className="flex flex-row ">
              <img src={gearshift} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Automat</p>
            </div>
            <div className="flex flex-row ">
              <img src={g17} alt="pump" className="w-6" />
              <p className="font-Sans text-[16px]">PB 15</p>
            </div>
            <div className="flex flex-row ">
              <img src={g1593} alt="gear" className="w-6" />
              <p className="font-Sans text-[16px]">Air Condition</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-5">
            <button className="w-[368px] h-[50px] bg-[#5937E0] rounded text-white font-semibold text-4 ">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
