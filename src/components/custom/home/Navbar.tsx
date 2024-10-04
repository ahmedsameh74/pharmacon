'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState('en'); // Default locale
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for mobile menu
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref for burger button
  // const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for language dropdown
  // const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const t = useTranslations();

  // Extract the locale manually from the path (assuming locale is the first segment)
  const locale = pathname?.split('/')[1] || 'en'; // Default locale is 'en'

  // Update the selected locale
  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  // Function to handle clicks outside the menu and dropdown
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      menuRef.current &&
      buttonRef.current &&
      // dropdownRef.current &&
      !menuRef.current.contains(target) &&
      !buttonRef.current.contains(target)
      // &&
      // !dropdownRef.current.contains(target)
    ) {
      setIsOpen(false); // Close the menu if clicked outside
      setDropdownOpen(false); // Close the dropdown if clicked outside
      // console.log('first')
    }
  };

  useEffect(() => {
    if (isOpen || dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dropdownOpen]);

  const menuItems = [
    { name: t('home'), href: `/${selectedLocale}/` },
    { name: t('aboutUs'), href: `/${selectedLocale}/about` },
    { name: t('products'), href: `/${selectedLocale}/products` },
    { name: t('contactUs'), href: `/${selectedLocale}/contact` }
  ];

  // const handleLocaleChange = (newLocale: string) => {
  //   router.push(`/${newLocale}${pathname.replace(`/${locale}`, '')}`);
  //   setSelectedLocale(newLocale);
  //   setDropdownOpen(false); // Close the dropdown after selection
  // };

  return (
    <nav className="bg-[#fff] shadow-md fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left part of the navbar */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href={`/${selectedLocale}/`}
                className="text-xl font-bold text-[#01547E]"
              >
                <Image
                  src="/assets/blueLogo.svg"
                  alt="PharmaconEG Logo"
                  style={{ width: 'auto', height: 'auto' }}
                  width={100}
                  height={100}
                  loading="eager"
                  priority={true}
                />
              </Link>
            </div>
          </div>

          {/* Center part of the navbar - Links */}
          <div
            className={`hidden md:flex items-center justify-center ${locale === 'en' ? 'space-x-8' : 'space-x-reverse space-x-8'}`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 rounded-md text-sm font-medium group ${
                  pathname === item.href ||
                  (item.href === `/${locale}/` && pathname === `/${locale}`)
                    ? 'text-[#01547E]'
                    : 'text-[#494B4B]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#01547E] transform ${
                    pathname === item.href ||
                    (item.href === `/${locale}/` && pathname === `/${locale}`)
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  } group-hover:scale-x-100 group-hover:-translate-y-0 transition-all duration-300 origin-left`}
                />
              </Link>
            ))}
          </div>

          {/* Right part of the navbar */}
          {/* Language Dropdown */}
          {/* <div className="relative h-full flex" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {selectedLocale.toUpperCase()}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 lg:w-48 md:w-24 top-10 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <div
                  onClick={() => handleLocaleChange('en')}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleLocaleChange('en');
                    }
                  }}
                >
                  English
                </div>
                <div
                  onClick={() => handleLocaleChange('ar')}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleLocaleChange('ar');
                    }
                  }}
                >
                  العربية
                </div>
              </div>
            )}
          </div> */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="mailto:info@pharmaconeg.com"
              className="text-white bg-[#01547E] hover:bg-[#088bcd] px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('contactNow')}
            </Link>
          </div>

          {/* Burger menu for small screens */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#01547E]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
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
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
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
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
        ref={menuRef}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href ||
                (item.href === `/${locale}/` && pathname === `/${locale}`)
                  ? 'text-[#01547E]'
                  : 'text-[#494B4B]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="block px-3 py-2">
            <Link
              href="mailto:demo@gmail.com"
              onClick={() => setIsOpen(false)}
              className="w-full text-white bg-[#01547E] hover:bg-[#088bcd] px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('contactNow')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
