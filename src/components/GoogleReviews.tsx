import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Darshana Vora",
      initials: "DV",
      date: "4 months ago",
      review: "Dr Mayuar Khairnar is good Dr. He is best dental implatologist. Dr Darshana Khairnar's opinion is knowledgeable. Dr Tejswini is contributing her best . This three Dr makes it Prayag Raj. and we are like pilgrims there. Team is also co operative."
    },
    {
      name: "Sat Neer",
      initials: "SN",
      date: "1 months ago",
      review: "Dr Mayur and his team are very patient, another dentist had done a bad job and Dr Mayur and team did their best to correct the issue diligently, I cannot express my gratitude to them in words. I highly recommend their services. I wish the Precigem team all the very best 💯"
    },
    {
      name: "Madhuri Wadate",
      initials: "MW",
      date: "8 months ago",
      review: "I have been recently treated here and the Dr Mayur Khairnar, Dr Darshana Khairnar and their team are very good at what they do. They helped alot with not only my treatment but explaining me every steps of the treatment I required and gave me the best result for my dental. Thankyou PreciGem Dental World for the beautiful and healthy smile"
    },
    {
      name: "Chandramohan Pillai",
      initials: "CP",
      date: "6 months ago",
      review: "Very much wonderful experience in PreciGem Dental Clinic for my wife full mouth teeth implantation. Dr Mayur Khairnar is well experienced and confident in his profession. Very much thankful to Dr Mayur Khairnar and Mrs Khairnar and their entire team for their hard work and friendly attitude. Highly recommended for any Dental Service."
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}