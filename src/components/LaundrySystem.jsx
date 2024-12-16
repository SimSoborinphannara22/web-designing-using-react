import washer1 from '../assets/washer1.png';
import washer2 from '../assets/washer2.png';
import scanning from '../assets/scanning-image.png';
import phone1 from '../assets/phone1.png';

const LaundrySystem = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-[#00d9f1] font-bold">
              Smart Laundry <span className="text-orange-600">System</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Simplify your laundry routine with QR code activation and automated 
              weekly system refresh. Enjoy a hassle-free and efficient experience 
              tailored to modern living.
            </p>
            <div className="mt-8 flex gap-4">
              <img src={washer1} alt="Washer 1" />
              <img src={washer2} alt="Washer 2" />
              <img src={scanning} alt="Washer 3" />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <img src={phone1} alt="Phone interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaundrySystem;
