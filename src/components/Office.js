import Image from "next/image";

export default function Office() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#4A4A4A] mb-4">A Safe Space for Healing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clinic is designed to be a sanctuary from the outside world. 
            Warm lighting, comfortable seating, and a private atmosphere ensure 
            you feel safe to share your story.
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/couch.jpg"
              alt="Comfortable therapy seating"
              fill
              className="object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
          </div>

          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/office-2.jpg"
              alt="Calming office details"
              fill
              className="object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
}