import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#01547E] text-white py-8">
      {/* First Row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="mb-4">
            {/* Logo */}
            <Image
              src="/assets/whiteLogo.svg" // Ensure path is correct
              alt="Logo"
              className="w-auto h-auto"
              width={100} // Adjusted width for better logo size on all screens
              height={100}
            />
          </div>
          <p className="text-sm text-center lg:text-left">
            Your trusted source for medication reviews and health advice.
          </p>
        </div>

        {/* Right Section: 3 Columns of Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:w-auto">
          {/* Column 1 */}
          <div>
            {/* <h3 className="font-bold mb-2 text-center lg:text-left">Company</h3> */}
            <ul className="text-center lg:text-left">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            {/* <h3 className="font-bold mb-2 text-center lg:text-left">Support</h3> */}
            <ul className="text-center lg:text-left">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/help" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            {/* <h3 className="font-bold mb-2 text-center lg:text-left">Resources</h3> */}
            <ul className="text-center lg:text-left">
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* White Line Separator */}
      <hr className="border-t-2 border-white my-6 mx-auto max-w-7xl" /> {/* Half width line */}

      {/* Second Row: Policies */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center text-sm">
        <p className="mb-4 lg:mb-0 text-center lg:text-left">&copy; 2024 PHARMACON. All Rights Reserved.</p>
        <div className="flex space-x-2">
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
					<p>|</p>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
					<p>|</p>
          <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
