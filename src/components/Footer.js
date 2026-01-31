export default function Footer() {
  return (
    <footer className="bg-[#4A4A4A] text-[#E5E0D8] py-10 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-serif">Dr. Maya Reynolds</h3>
        <p>Licensed Clinical Therapist</p>
        <div className="pt-4 border-t border-gray-600 text-sm opacity-75">
          © {new Date().getFullYear()} Dr. Maya Reynolds Therapy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}