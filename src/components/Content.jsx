import phone1 from "../assets/phone1.png";
import checkIn from "../assets/check-in.png";
import checkOut from "../assets/check-out.png";
const Content = () => {
    return (
        
        <div className="flex justify-end items-center mr-10 gap-10">
                <img src={phone1} alt="phone1" />
                <div className="gap-10">
                    <img src={checkIn} alt="" />
                    <img src={checkOut} alt="" />
            </div>
            <div className="text-right">
                <h1 className="text-5xl text-[#00d9f1] font-bold">
                    Mobile Attendance <span className="text-5xl font-bold text-orange-600">System</span>
                </h1>
                <p className="text-lg mx-auto w-100 mt-5">
                    Effortlessly track employee attendance with our seamless clock-in/out feature and real-
                    <br />
                    time monitoring. Stay updated with accurate records, ensuring efficiency and reliability for your workforce.

                </p>
            </div>
        </div>
    );
};

export default Content;
