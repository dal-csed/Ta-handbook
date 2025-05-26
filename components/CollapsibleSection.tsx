"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  id: number;
  title: string;
  content: React.ReactNode; 
}

export default function CollapsibleSection({ id, title, content }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      console.log('Hash changed to:', hash);
      if (hash === `section-${id}`) {
        setIsOpen(true);
        // Small delay to ensure the component is rendered before scrolling
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href') === `#section-${id}`) {
        setTimeout(() => {
          setIsOpen(true);
          setTimeout(() => {
            document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }, 0);
      }
    };

    // Listen for hash changes and link clicks
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    
    // Clean up the event listeners
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [id]);

  return (
    <div className="shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between py-4 px-4 text-left 
          font-semibold text-xl transition-colors duration-300
          ${isOpen
            ? "bg-[#242424] text-[#FFFFFF] rounded-t-sm"                                   
            : "bg-[#FFFFFF] text-[#242424] rounded-sm hover:bg-[#FFD400] hover:text-[#242424]" 
          }
        `}
      >
        {title}
        <span className="ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden px-6 text-gray-800 whitespace-pre-line ${
          isOpen ? "pb-6" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}