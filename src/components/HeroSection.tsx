import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile With<br />
        <span className="text-[#1a897f]">Precigem Dental World</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg bg-black">
            <iframe
              className="w-full h-full object-cover rounded-lg"
              src="https://www.youtube.com/embed/Kh624un-CaA?start=14&autoplay=1&mute=1&loop=1&playlist=Kh624un-CaA"
              title="Precigem Dental World Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>







        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Implant Pricing</h2>
          <p className="text-2xl md:text-3xl font-bold mb-2">₹20,000 – ₹40,000 <span className="text-lg font-normal">per implant</span></p>
          <p className="text-sm md:text-base mb-4 opacity-90">Pricing depends on the type and brand of implant system</p>
          <br />
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-colors pulse-element w-full md:w-auto mt-2 text-center"
          >
            <div>📞 Book Consultation</div>
            <div className="text-xs md:text-sm font-normal mt-1">🎉 Offers available only during festivals</div>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg hover:opacity-90 transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+918308411139"
          className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:opacity-90 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-[rgb(55,81,82)]
">Precigem Dental World?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "17+ Years of Clinical Experience", desc: "Caring for smiles with dedication and trust" },

            { icon: "/images/heroicons/premium.png", title: "Premium Implants", desc: "International Quality" },
            { icon: "/images/heroicons/team.png", title: "Specialist Team", desc: "Qualified Doctors" },
            { icon: "/images/heroicons/sterilization.png", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Technology", desc: "Powered by modern digital dentistry and innovative treatment methods" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#1a897f] mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">17+ Years of Excellence
              Caring for smiles with dedication and trust</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">We believe in total infection control regime as per F.D.A. guidelines.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">Our patients can expect to keep their teeth strong and healthy forever</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">We believe that with proper preventive care and regular checkups</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">We believe in patient education and motivation.</span>
          </li>


          <li className="flex items-start gap-2">
            <span className="text-[#1a897f]">✔</span>
            <span className="text-sm md:text-base">We believe in practice buildup through satisfied patient reference.</span>
          </li>
          <li className="flex items-start gap-2">


          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}