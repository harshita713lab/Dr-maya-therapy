import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Office from '../components/Office';
import Footer from '../components/Footer'; // Import Footer

export default function Home() {
  return (
    <main className="bg-[#E5E0D8] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Office />
      <Footer /> {/* Add Footer at the end */}
    </main>
  );
}