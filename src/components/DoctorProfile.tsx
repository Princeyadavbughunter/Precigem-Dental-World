import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="bg-brandBlue p-4 md:p-8 lg:p-12">
      <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-10">Meet Our Specialists</h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Dr. Mayur Khairnar */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
          <div className="md:flex md:gap-8 items-start">
            <div className="text-center mb-6 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative border-4 border-[#01659e]">
                {/* Placeholder image until user provides real one */}
                <Image src="/images/doc111.png" alt="Dr. Mayur Khairnar" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a897f]">Dr. Mayur Khairnar</h3>
              <p className="text-gray-600 font-semibold mb-2">Head Dentist | Chief Periodontist & Oral Implantologist</p>
              <p className="text-sm bg-blue-50 text-[#1a897f] py-1 px-3 rounded-full inline-block font-bold">17+ Years Experience</p>
            </div>

            <div className="md:flex-grow space-y-4">
              <div>
                <h4 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">Expertise</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span>👨‍⚕️</span> Specialist in Full Mouth Rehabilitation</li>
                  <li className="flex gap-2"><span>🦷</span> Expert in Full Mouth Dental Implants with Immediate Loading</li>
                  <li className="flex gap-2"><span>🔬</span> Extensive experience in treating highly atrophied jaws</li>
                  <li className="flex gap-2"><span>🏥</span> Leads complex and advanced implant cases at Precigem Dental World</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Darshana Khairnar */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
          <div className="md:flex md:gap-8 items-start">
            <div className="text-center mb-6 md:mb-0 md:flex-shrink-0 md:w-1/3 md:order-2"> {/* Image on right for desktop variation if desired, but keeping left for consistency is often better. Let's keep left for consistency. */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative border-4 border-[#01659e]">
                {/* Placeholder image */}
                <Image src="/images/doc222.jpeg" alt="Dr. Darshana Khairnar" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a897f]">Dr. Darshana Khairnar</h3>
              <p className="text-gray-600 font-semibold">Senior Dentist | DSD Specialist & Oral Implantologist</p>
            </div>

            <div className="md:flex-grow space-y-4 md:order-1">
              <div>
                <h4 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">Expertise</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span>✨</span> Specialist in Digital Smile Design (DSD)</li>
                  <li className="flex gap-2"><span>💎</span> Expertise in aesthetic and cosmetic dentistry</li>
                  <li className="flex gap-2"><span>🦷</span> Skilled in oral implantology</li>
                  <li className="flex gap-2"><span>😊</span> Focused on delivering natural-looking, smile-enhancing results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button onClick={onBookAppointment} className="bg-white text-[#1a897f] py-4 px-8 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-md">
            Book Appointment with Our Experts
          </button>
        </div>

      </div>
    </section>
  );
}