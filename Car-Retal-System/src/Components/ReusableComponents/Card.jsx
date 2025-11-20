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
  const cars = [
    { img: carimg1, name: "Mercedes", type: "Sedan", price: 25 },
    { img: carimg2, name: "Mercedes", type: "Sport", price: 50 },
    { img: carimg3, name: "Mercedes", type: "Sedan", price: 45 },
    { img: carimg4, name: "Porsche", type: "SUV", price: 40 },
    { img: carimg5, name: "Toyota", type: "Sedan", price: 35 },
    { img: carimg6, name: "Porsche", type: "SUV", price: 50 },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-14 py-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cars.map((car, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer"
          >
            {/* Image */}
            <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />

            {/* Info Section */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-xl">{car.name}</p>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-xl text-[#5937E0]">${car.price}</p>
                  <p className="text-gray-500 text-sm">per day</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex justify-between items-center text-gray-600 py-3 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <img src={gearshift} alt="gear" className="w-5" />
                  <p className="text-sm">Automatic</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={g17} alt="fuel" className="w-5" />
                  <p className="text-sm">PB 15</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={g1593} alt="ac" className="w-5" />
                  <p className="text-sm">A/C</p>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-4">
                <button className="w-full bg-[#5937E0] hover:bg-[#472fc0] text-white font-semibold py-2 rounded-md transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
