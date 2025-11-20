import Logo from "../../assets/footerpic/Logo.png";
import location from "../../assets/footerpic/location.png";
import call from "../../assets/footerpic/call.png";
import email from "../../assets/footerpic/email.png";
import facebook from "../../assets/footerpic/facebook.png";
import x from "../../assets/footerpic/x.png";
import insta from "../../assets/footerpic/insta.png";
import youtube from "../../assets/footerpic/youtube.png";
import GooglePlay from "../../assets/footerpic/GooglePlay.png";
import AppStore from "../../assets/footerpic/AppStore.png";

function Footer() {
  return (
    <footer className="mt-20 bg-gray-100">
      <div className="bg-white text-black px-6 py-10 md:px-16 lg:px-24">
        {/* ===== 4x2 Grid Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* ========== COLUMN 1 ========== */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Logo */}
            <img src={Logo} alt="Company Logo" className="w-40 mx-auto md:mx-0" />

            {/* Follow Us */}
            <div>
              <p className="font-bold text-lg mb-3 leading-relaxed">
                Follow us on social media <br /> for updates and offers!
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <img src={facebook} alt="facebook" className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform" />
                <img src={x} alt="x" className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform" />
                <img src={insta} alt="insta" className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform" />
                <img src={youtube} alt="youtube" className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* ========== COLUMN 2 ========== */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Address */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={location} alt="location" className="w-10 h-10" />
              <div className="text-left">
                <h2 className="font-semibold">Address</h2>
                <p className="font-bold text-sm md:text-base">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h1 className="font-bold text-lg mb-3">Useful Links</h1>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">F.A.Q</a></li>
              </ul>
            </div>
          </div>

          {/* ========== COLUMN 3 ========== */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={email} alt="email" className="w-10 h-10" />
              <div className="text-left">
                <h2 className="font-semibold">Email</h2>
                <p className="font-bold text-sm md:text-base">nwiger@yahoo.com</p>
              </div>
            </div>

            {/* Vehicles */}
            <div>
              <h1 className="font-bold text-lg mb-3">Vehicles</h1>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Sedan</a></li>
                <li><a href="#" className="hover:underline">Cabriolet</a></li>
                <li><a href="#" className="hover:underline">Pickup</a></li>
                <li><a href="#" className="hover:underline">Minivan</a></li>
                <li><a href="#" className="hover:underline">SUV</a></li>
              </ul>
            </div>
          </div>

          {/* ========== COLUMN 4 ========== */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={call} alt="call" className="w-10 h-10" />
              <div className="text-left">
                <h2 className="font-semibold">Phone</h2>
                <p className="font-bold text-sm md:text-base">+537 547-6401</p>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h1 className="font-bold text-lg mb-3">Download App</h1>
              <div className="flex flex-col items-center md:items-start gap-3">
                <img src={GooglePlay} alt="Google Play" className="w-36 hover:scale-105 transition-transform" />
                <img src={AppStore} alt="App Store" className="w-36 hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="text-center mt-10 border-t border-gray-200 pt-5">
          <p className="text-sm md:text-base">
            © 2025 Car Rental. Developed by <strong>Haris Shah</strong> &{" "}
            <strong>Kashif Afridi</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
