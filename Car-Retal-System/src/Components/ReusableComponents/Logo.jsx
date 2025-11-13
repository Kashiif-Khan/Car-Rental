import Toyota from "../assets/Vehicallogo/Toyota.png";
import Ford from "../assets/Vehicallogo/Ford.png";
import Mercedes from "../assets/Vehicallogo/Mercedes.png";
import Jeep from "../assets/Vehicallogo/Jeep.png";
import BMW from "../assets/Vehicallogo/BMW.png";
import Audi from "../assets/Vehicallogo/Audi.png";
function Logo() {
  return (
    <div>
      {/* Logos Section */}
      <div className="flex justify-center items-center py-10 px-4 h-40 mt-10 bg-gray-100">
        <div className="bg-white shadow-md rounded-full px-10 py-6 flex flex-wrap justify-center items-center gap-12 w-fit">
          <img
            src={Toyota}
            alt="Toyota"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <img
            src={Ford}
            alt="Ford"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <img
            src={Mercedes}
            alt="Mercedes"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <img
            src={Jeep}
            alt="Jeep"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <img
            src={BMW}
            alt="BMW"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <img
            src={Audi}
            alt="Audi"
            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
export default Logo;
