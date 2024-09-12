export default function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-[#01547E] flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-white my-4 px-4 md:px-0">
        Get Your Free Medication Review. Let&apos;s Connect With Us!
      </h1>

      {/* Paragraph */}
      <p className="text-white text-center font-light my-4 px-4 md:px-20">
        This is a paragraph inside a card banner. You can use this space to give
        an introduction or highlight important information for your users.
      </p>

      {/* Button */}
      <button className="bg-white hover:bg-[#3b6980] text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg my-4 transition duration-300">
        Contact Us
      </button>
    </div>
  );
}
