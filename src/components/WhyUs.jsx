// WhyUs.jsx
const WhyUs = () => {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-7xl font-bold">
                Why <br />
                <span className="text-[#00d9f1]">IN</span>
                <span className="text-orange-600">TECH</span>?
              </h2>
            </div>
            
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                <div className="flex items-start">
                  <span className="text-[#00d9f1] mr-4 text-2xl">✓</span>
                  <div className="text-xl">
                    <span className="font-bold">Efficiency:</span> Streamline operations and save time with smart technology.
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#00d9f1] mr-4 text-2xl">✓</span>
                  <div className="text-xl">
                    <span className="font-bold">Security:</span> Safeguard your workplace with advanced, reliable systems.
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#00d9f1] mr-4 text-2xl">✓</span>
                  <div className="text-xl">
                    <span className="font-bold">Innovation:</span> Stay ahead with cutting-edge solutions designed for the future.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default WhyUs;