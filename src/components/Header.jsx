import logo from "../assets/logo.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";

const Header = () => {
    return (
        <header className="flex flex-col h-30 max-w-auto">
            <div className="flex justify-end items-center">
                <img className="mr-auto" src={logo} alt="Logo" />
                <ul className="flex justify-end items-center">
                    <li className="p-4 font-bold">Home</li>
                    <li className="p-4 font-bold">Products</li>
                    <li className="p-4 font-bold">About</li>
                    <li className="p-4 font-bold">Contact</li>
                </ul>
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 m-4">
                    Request a Demo
                </button>
            </div>

            <div className="container mx-auto flex justify-between items-center max-w-663 mt-10">
                <div className="m-10">
                    <h1 className="text-5xl text-[#00d9f1] font-bold">Smarter Workplaces</h1>
                    <span className="text-5xl font-bold text-orange-600">Secure Solutions.</span>
                    <p className="text-lg mt-5">
                        Revolutionize workplace efficiency and security through
                    </p>
                    <p>innovative smart technology solutions.</p>
                </div>
                <div className="relative flex justify-end items-center">
                    <img className="absolute z-20 top-0 -left-[150px] bottom-4" src={phone1} alt="Phone Mockup 1" />
                    <img className="z-10 top-5" src={phone2} alt="Phone Mockup 2" />
                </div>
            </div>
        
        </header>
    );
};

export default Header;
