import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';

const SecuritySystem = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
              </div>
            </div>
            <div className="md:w-1/2 ml-10">
              <h2 className="text-4xl text-[#00d9f1] font-bold">
                Face Recognition and <span className="text-orange-600">Attendance System</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Enhance workplace security and efficiency with real-time face recognition 
                seamlessly integrated into CCTV systems. Automatically detect and record 
                attendance while ensuring workplace safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default SecuritySystem;