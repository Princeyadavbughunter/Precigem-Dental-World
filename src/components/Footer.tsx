import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Image
            src="/images/precigemlogo.jpeg"
            alt="Precigem Dental World"
            width={240}
            height={60}
            className="mx-auto mb-6 h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light">
            Excellence in dentistry with a personal touch. specialized care for your perfect smile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Contact Us</h3>
            <a href="tel:+918308411139" className="block text-[#1a897f] font-bold text-xl md:text-2xl hover:text-brandBlue transition-colors mb-2">+91 8308411139</a>
            <p className="text-gray-500 font-medium tracking-wide">Precigem Dental World</p>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Open Hours</h3>
            <p className="text-gray-600 text-lg flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#1a897f] text-xl">🕒</span> 10:30 AM – 7:30 PM
            </p>
            <p className="text-gray-400 text-sm mt-1">Mon - Sat (Sunday by appointment)</p>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Location</h3>
            <a
              href="https://maps.app.goo.gl/6R72UsY83au5XC136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brandTeal transition-colors cursor-pointer block leading-relaxed group-hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-2xl mt-0.5">📍</span>
                <span>Precigem Dental World 301, Sai Iconic Tower, 4 Bungalows – Lokhandwala Road, Andheri West, Mumbai – 400053</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 mt-2 hover:text-brandBlue transition-colors">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 bg-gray-100 rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-inner border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4726.540549432455!2d72.8233709!3d19.1316426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b618c60034a9%3A0xcbddcb224057487e!2sPreciGem%20Dental%20World!5e1!3m2!1sen!2sin!4v1768937184409!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Precigem Dental World Location - Andheri West, Mumbai, Maharashtra 400053"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Precigem Dental World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}