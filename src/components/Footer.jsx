import logo from '../assets/logo.png';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';

const Footer = () => {
    return (
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Top orange border */}
          <div className="h-1 bg-orange-500 w-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left side */}
            <div className="space-y-4">
              <div className="flex items-center">
               
                <h3 className="text-4xl font-bold ml-2">
                  <img src={logo} alt="Logo" className="h-16" />
                </h3>
              </div>
              <p className="text-gray-600 max-w-md">
                Be the leading provider of cutting-edge smart technology,
                creating smarter, more efficient, and secure work environments
                for businesses of all sizes.
              </p>
              <nav className="flex space-x-8">
                <a href="#home" className="font-bold">Home</a>
                <a href="#products" className="font-bold">Products</a>
                <a href="#about" className="font-bold">About Us</a>
                <a href="#contact" className="font-bold">Contact Us</a>
              </nav>
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <div>
                <h4 className="text-orange-500 font-bold text-xl mb-2">Contact us through Phone Number</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-xl">+885 12 345 678</span>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
                    Call now
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-orange-500 font-bold mb-2">Address :</h4>
                <p className="text-gray-600">
                  Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune,<br />
                  Phnom Srouch District, Kampong Speu Province, Cambodia
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#terms" className="text-gray-600">Terms & Conditions</a>
              <a href="#privacy" className="text-gray-600">Privacy Policy</a>
            </div>
            <div className="flex space-x-4">
              <a href="#facebook" className="bg-orange-500 p-2 rounded-full">
                <img src={facebook} alt="Facebook" className="h-6 w-6 filter invert brightness-0" />
              </a>
              <a href="#twitter" className="bg-orange-500 p-2 rounded-full">
                <img src={twitter} alt="Twitter" className="h-6 w-6 filter invert brightness-0" />
              </a>
              <a href="#instagram" className="bg-orange-500 p-2 rounded-full">
                <img src={instagram} alt="Instagram" className="h-6 w-6 filter invert brightness-0" />
              </a>
              <a href="#tiktok" className="bg-orange-500 p-2 rounded-full">
                <img src={tiktok} alt="TikTok" className="h-6 w-6 filter invert brightness-0" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;