export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress",
      description: "Overcome constant worry and physical tension. We will work together to build tools that bring you peace of mind.",
    },
    {
      title: "Life Transitions",
      description: "Whether it's a new career, a breakup, or a big move, I help you navigate change with confidence and clarity.",
    },
    {
      title: "Relationship Health",
      description: "Strengthen your connections. Learn to communicate your needs and set healthy boundaries in your relationships.",
    }
  ];

  return (
    <section className="bg-[#F4F1EA] py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#4A4A4A] mb-12 text-center">My Specialties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-[#E5E0D8]">
              <h3 className="text-2xl font-serif text-[#4A4A4A] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}