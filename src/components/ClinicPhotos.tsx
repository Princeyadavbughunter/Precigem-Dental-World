import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-lightCream p-4 md:p-8 lg:p-12">
      <h2 className="text-black md:text-3xl font-bold text-center mb-6">Our State-of-the-Art Clinic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {['pclinic1.jpeg', 'pclinin2.jpeg', 'pclininc3.jpeg', 'pclininc4.jpeg'].map((img, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-lg h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-md transition-shadow cursor-pointer hover:shadow-xl"
          >
            <Image
              src={`/images/clinic/${img}`}
              alt={`Clinic Photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={i <= 2}
            />
          </div>
        ))}
      </div>
      <button
        onClick={onBookAppointment}
        className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md mx-auto block hover:shadow-lg transition-all"
      >
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 