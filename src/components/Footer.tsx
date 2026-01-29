import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/precigemlogo.jpeg"
            alt="Precigem Dental World"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#1a897f] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+918308411139" className="block text-[#1a897f] font-bold md:text-lg hover:text-black transition-colors">+91 8308411139</a>
            <p className="text-gray-700"></p>
            <p className="text-gray-700">Precigem Dental World</p>
          </div>

          <div>
            <h3 className="font-bold text-[#1a897f] mb-2 md:text-lg">Open Hours</h3>
            <p className="text-gray-700 md:text-lg">
              10:30 AM – 7:30 PM
            </p>
          </div>


          <div>
            <h3 className="font-bold text-[#1a897f] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/6R72UsY83au5XC136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#1a897f] transition-colors cursor-pointer block"
            >
              📍

              Precigem Dental World Andheri West, opposite Kokilaben hospital


            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4726.540549432455!2d72.8233709!3d19.1316426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b618c60034a9%3A0xcbddcb224057487e!2sPreciGem%20Dental%20World!5e1!3m2!1sen!2sin!4v1768937184409!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orovac Dental Care Location - Malviya Nagar, Jaipur, Rajasthan 302017"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}