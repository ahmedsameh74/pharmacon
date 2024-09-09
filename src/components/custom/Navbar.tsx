'use client';
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button"; // shadcn Button

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for mobile menu
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref for burger button

  // Function to handle clicks outside the menu
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    // Check if the click is outside the menu and the button
    if (
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(target) &&
      !buttonRef.current.contains(target)
    ) {
      setIsOpen(false); // Close the menu if clicked outside
    }
  };

  // Attach the event listener when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Products", href: "/products" },
		{ name: "Contact Us", href: "/contact" },
	];

  return (
    <nav className="bg-[#DCF0FA] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left part of the navbar */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="shrink-0">
              <a href="/" className="text-xl font-bold text-[#01547E]">
                PHARMACON
              </a>
            </div>
          </div>

          {/* Center part of the navbar - Links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
					{menuItems.map((item) => (
						<a
						key={item.name}
						href="#"
					  className="relative text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium group"
						>
							{item.name}
							<span
								className="absolute left-0 bottom-0 w-full h-[2px] bg-[#01547E] transform scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-0 transition-all duration-300 origin-left"
							/>
						</a>
					))}
          </div>

          {/* Right part of the navbar */}
          <div className="hidden md:flex items-center">
            <Button variant="default"className="text-white bg-[#01547E] hover:bg-[#088bcd]">Contact Now</Button>
          </div>

          {/* Burger menu for small screens */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              ref={buttonRef} // Attach ref to the burger button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#01547E]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for burger menu */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon for closing the menu */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
        ref={menuRef} // Attach ref to the mobile menu
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{menuItems.map((item) => (
						<a
						key={item.name}
						href="#"
					  className="relative text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm text-base block font-medium group"
						>
							{item.name}
							<span
								className="absolute left-0 bottom-0 w-[20%] h-[2px] bg-[#01547E] transform scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-0 transition-all duration-300 origin-left"
							/>
						</a>
					))}
          {/* <a
            href="#"
            className="text-gray-500 hover:text-gray-900 hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a> */}
          <div className="block px-3 py-2">
            <Button variant="default" className="w-full text-white bg-[#01547E] hover:bg-[#088bcd]">
							Contact Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
