import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a897f] mb-6">About Precigem Dental World</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Precigem Dental World is a <strong>NABH-accredited, state-of-the-art dental clinic</strong> specializing in <strong>Full Mouth Rehabilitation and Full Mouth Implants with Immediate Loading techniques</strong>.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
                        The clinic has been treating patients with <strong>long-term follow-ups for over 10 years, handling complex and advanced cases including highly atrophied jaws</strong>. Equipped with advanced dental technology and a highly skilled in-house specialist team, the clinic delivers predictable, long-lasting, and aesthetic dental outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a897f] mb-4">Key Specializations</h3>
                        <ul className="space-y-3">
                            {[
                                "Full Mouth Rehabilitation",
                                "Full Mouth Dental Implants",
                                "Immediate Loading Implant Technique",
                                "Treatment of Highly Atrophied Jaws",
                                "Cosmetic Smile Design",
                                "Advanced Prosthodontic Solutions"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#1a897f] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a897f] mb-4">Doctors & Team</h3>
                        <ul className="space-y-3">
                            {[
                                "In-house Periodontist",
                                "In-house Implantologist",
                                "In-house Prosthodontist"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#1a897f] text-xl">👥</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
