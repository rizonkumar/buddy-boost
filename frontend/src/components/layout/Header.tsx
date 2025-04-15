import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xl font-bold">GoalPartner</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm">Sign Up Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t absolute w-full">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Log In
              </Button>
              <Button size="sm" className="w-full">
                Sign Up Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
