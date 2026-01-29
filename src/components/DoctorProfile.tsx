import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

interface Doctor {
  name: string;
  qualification: string;
  description: string;
  image: string;
  experience?: string;
  specialization?: string; // Optional simpler title for visual hierarchy
}

const doctors: Doctor[] = [
  {
    name: "Dr. Mayur Khairnar",
    qualification: "Head Dentist | Chief Periodontist & Oral Implantologist",
    experience: "17+ Years Experience",
    specialization: "Implant & Rehabilitation Specialist",
    description: "Specialist in Full Mouth Rehabilitation and Dental Implants with Immediate Loading. Expert in treating highly atrophied jaws and leading complex implant cases.",
    image: "/images/doctor/drmayur.jpeg"
  },
  {
    name: "Dr. Darshana Khairnar",
    qualification: "Senior Dentist | DSD Specialist & Oral Implantologist",
    specialization: "Cosmetic & Implant Dentist",
    description: "Specialist in Digital Smile Design (DSD) and aesthetic dentistry. Focused on delivering natural-looking, smile-enhancing results and skilled oral implantology.",
    image: "/images/doc222.jpeg"
  },
  {
    name: "Dr. Tejashvi Seth",
    qualification: "BDS, MDS (Periodontology and Oral Implantology)",
    specialization: "Periodontist & Implantologist",
    description: "National speaker and clinical educator on restorative implantology. Specializes in gum diseases, esthetic mucogingival surgeries, smile designing, and digital dental treatment simulation.",
    image: "/images/doctor/Dr Tejashvi Seth.jpeg"
  },
  {
    name: "Dr. Reena Yadav",
    qualification: "BDS, MDS (Oral and Maxillofacial Surgery)",
    specialization: "Oral & Maxillofacial Surgeon",
    description: "Fellowship in head, face, and neck oncology. Focuses on oral cancer treatment, jaw reconstruction, zygomatic implants, and complex oral rehabilitation including black fungus cases.",
    image: "/images/doctor/Dr Reena Yadav.jpeg"
  },
  {
    name: "Dr. Adit Mehta",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "17+ Years Experience",
    specialization: "Endodontist & Cosmetic Dentist",
    description: "Well-respected endodontist and cosmetic/aesthetic dentist specializing in operative dentistry and endodontics.",
    image: "/images/doctor/Dr adit mehta.jpeg"
  },
  {
    name: "Dr. Sanika",
    qualification: "FDS (Prosthodontics and Oral Implantology)",
    specialization: "Prosthodontist & Implantologist",
    description: "Fellow of International Congress of Oral Implantologists. Dedicated to giving quality dental care utilizing the latest technology and advancements in dentistry.",
    image: "/images/doctor/Dr sanika.jpeg"
  },
  {
    name: "Dr. Nayana Dandwate",
    qualification: "BDS, MDS (Orthodontics and Dentofacial Orthopaedics)",
    specialization: "Orthodontist",
    description: "Expert in diagnosing and treating tooth and jaw misalignment. Dedicated to creating balanced, beautiful functional smiles through advanced orthodontic treatments.",
    image: "/images/doctor/Dr nayana.jpeg"
  },
  {
    name: "Dr. Rameez Isani",
    qualification: "BDS, Digital Dentistry Specialist",
    specialization: "Digital Dentistry Expert",
    description: "Niche expertise in integrating advanced digital technologies like intra-oral scanning, guided implant planning, and 3D printing for precise dental solutions.",
    image: "/images/doctor/Dr Rameez Isani.jpeg"
  },
  {
    name: "Mr. Hemant Khot",
    qualification: "Dental Laboratory Specialist",
    specialization: "Lab Operations Head",
    description: "Oversees operations with over 300 technicians. Skilled in dental restorations using advanced digital design and milling technologies, ensuring high-quality, customized prosthetics.",
    image: "/images/doctor/Mr. Hemant Khot.jpeg"
  }
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="bg-gradient-to-br from-brandBlue to-[#015a8d] p-4 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Meet Our Expert Team</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full mb-6"></div>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            A collaborative team of specialists dedicated to providing world-class dental care with precision and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative pt-8 pb-4 bg-gray-50 flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full border-4 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors p-1 bg-white">
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {doctor.experience && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1a897f] text-white text-xs font-bold py-1 px-3 rounded-full shadow-md whitespace-nowrap">
                      {doctor.experience}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#1a897f] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[#d4af37] font-semibold text-sm uppercase tracking-wide mb-3">
                  {doctor.qualification}
                </p>
                <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-4 group-hover:bg-[#1a897f] transition-colors"></div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onBookAppointment}
            className="bg-white text-[#1a897f] py-4 px-10 rounded-full font-bold text-xl hover:bg-[#1a897f] hover:text-white transition-all duration-300 shadow-lg border-2 border-transparent hover:border-white ring-offset-2 ring-offset-brandBlue"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}