import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#E5E0D8] py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Image */}
        <div className="md:w-1/2 relative h-[400px] w-full">
          <Image
            src="/ab.jpg" 
            alt="Dr. Maya in her office"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-[#4A4A4A]">
            Healing starts with being heard.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I believe that therapy is a collaborative journey. My approach combines 
            clinical expertise with genuine human connection. I specialize in helping 
            clients unlearn old patterns and build new, healthier ways of living.
          </p>
          <div className="space-y-2">
            <p className="font-bold text-[#4A4A4A]">My Approach includes:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Mindfulness-Based Stress Reduction</li>
              <li>Trauma-Informed Care</li>
            </ul>
          </div>
          <button className="text-[#4A4A4A] border-b border-[#4A4A4A] pb-1 hover:text-black transition">
            Learn More About Me →
          </button>
        </div>

      </div>
    </section>
  );
}