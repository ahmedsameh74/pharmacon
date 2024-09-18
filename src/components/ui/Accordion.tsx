'use client';
import { useState, FC, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4">{children}</div>
      </div>
    </div>
  );
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
