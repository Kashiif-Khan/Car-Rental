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
    <>
      <footer className="mt-28 bg-gray-100">
        {/* Main Footer */}
        <div className="bg-white text-black p-10">
          {/* Top Section */}
          <div className="flex flex-row justify-around items-start gap-10 flex-wrap">
            {/* Logo */}
            <div>
              <img src={Logo} alt="Company Logo" className="w-48" />
            </div>

            {/* Location */}
            <div className="flex flex-row items-center gap-2">
              <img src={location} alt="location" className="w-12 h-12" />
              <div>
                <h2 className="font-semibold">Address</h2>
                <p className="font-bold text-lg mb-2">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>

             {/* Email */}
            <div className="flex flex-row items-center gap-2">
              <img src={email} alt="email" className="w-12 h-12" />
              <div>
                <h2 className="font-semibold">Email</h2>
                <p className="font-bold text-lg mb-2">nwiger@yahoo.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="flex flex-row items-center gap-2">
              <img src={call} alt="call" className="w-12  h-12" />
              <div>
                <h2 className="font-semibold">Phone</h2>
                <p className="font-bold text-lg mb-2">+537 547-6401</p>
              </div>
            </div>

           
          </div>

          {/* Middle Section */}
          <div className="mt-10 flex flex-wrap justify-center items-start gap-44 text-center md:text-left">
            {/* Follow Us Section */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-center md:text-left leading-relaxed font-bold text-lg mb-2">
                Follow us on <br /> social media for <br /> the latest updates{" "}
                <br /> and offers!
              </p>

              {/* Social Icons */}
              <div className="flex flex-row justify-center items-center gap-5 mt-5">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={x}
                    alt="x"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={insta}
                    alt="insta"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={youtube}
                    alt="youtube"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
              <h1 className="font-bold text-lg mb-2">Useful Links</h1>
              <a href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:underline">
                Gallery
              </a>
              <a href="#" className="hover:underline">
                Blogs
              </a>
              <a href="#" className="hover:underline">
                F.A.Q
              </a>
            </div>

            {/* Vehicles */}
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
              <h1 className="font-bold text-lg mb-2">Vehicles</h1>
              <a href="#" className="hover:underline">
                Sedan
              </a>
              <a href="#" className="hover:underline">
                Cabriolet
              </a>
              <a href="#" className="hover:underline">
                Pickup
              </a>
              <a href="#" className="hover:underline">
                Minivan
              </a>
              <a href="#" className="hover:underline">
                SUV
              </a>
            </div>
            {/* Download App */}
            <div className="flex flex-col justify-center items-center md:items-start gap-5">
              <h1 className="font-bold text-lg mb-2">Download App</h1>
              <div>
                <img src={GooglePlay} alt="Google Play" className="w-40" />
              </div>
              <div>
                <img src={AppStore} alt="App Store" className="w-40" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-10  ">
            <p>
              © 2025 Car Rental. Developed by <strong>Haris Shah</strong> &{" "}
              <strong>Kashif Afridi</strong>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
