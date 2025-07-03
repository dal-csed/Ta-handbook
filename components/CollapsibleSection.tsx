import { useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  id: number;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CollapsibleSection({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: CollapsibleSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const hasHandledInitialHash = useRef(false);

  // Handle hash-based section opening (only for hashchange events, not initial load)
  useEffect(() => {
    const handleHashChange = () => {
      // Don't handle hash changes if the page just loaded
      if (sessionStorage.getItem('justLoaded')) {
        return;
      }
      
      const hash = window.location.hash.slice(1);
      if (hash === `section-${id}`) {
        // Only open if not already open
        if (!isOpen) {
          onToggle();
        }
        
        // Scroll to section after it's opened
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    // Only handle hash changes, not initial load
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id, isOpen, onToggle]);

  // Handle direct link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href') === `#section-${id}`) {
        e.preventDefault();
        
        // Don't handle clicks if the page just loaded
        if (sessionStorage.getItem('justLoaded')) {
          return;
        }
        
        onToggle();
        
        // Update URL without causing page jump
        window.history.replaceState(null, '', `#section-${id}`);
        
        // Scroll to section after it's opened
        setTimeout(() => {
          document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [id, onToggle]);

  return (
    <div className="shadow-sm">
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between py-4 px-4 text-left 
          font-semibold text-xl transition-colors duration-300
          ${
            isOpen
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
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden px-6 text-gray-800 whitespace-pre-line ${
          isOpen ? "max-h-[3000px] pb-6" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}