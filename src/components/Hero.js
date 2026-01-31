import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
      {/* Left Side: Copywriting for Dr. Maya Reynolds */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif text-[#4A4A4A] leading-tight">
          Find Your Calm <br /> In The Chaos.
        </h1>
        <p className="text-lg text-gray-700 max-w-md leading-relaxed">
          Hi, I'm Dr. Maya Reynolds. I help individuals navigate anxiety, 
          burnout, and life transitions with compassion and evidence-based care.
          You don't have to do this alone.
        </p>
        <button className="px-8 py-3 bg-[#4A4A4A] text-[#E5E0D8] rounded-full uppercase text-sm tracking-widest hover:bg-gray-800 transition duration-300">
          Book a Consultation
        </button>
      </div>

      {/* Right Side: The Image You Already Have */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
        <div className="relative w-[400px] h-[500px]">
          <Image
            src="/hero-img.jpg"
            alt="Dr. Maya Reynolds - Therapist"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}