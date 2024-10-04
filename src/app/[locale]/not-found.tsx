import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  // console.log('first');
  return (
    <div className="relative  p-4 min-w-screen flex flex-col justify-center text-center items-center mb-6">
      {/* SVG Illustration */}
      <div className="mb-8">
        <Image
          src="/assets/not-found.svg" // Replace with your SVG path
          alt="Not Found"
          width={200}
          height={100}
        />
      </div>

      {/* Text Content */}
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-500">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto">
          Oops! The page you’re looking for doesn’t exist. It might have been
          moved or deleted.
        </p>

        {/* Button to go back home */}
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
