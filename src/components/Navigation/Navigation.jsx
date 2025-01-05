import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { MobileMenu } from './MobileMenu';
import { Container } from '../Layout/Container';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <Container>
        <div className="py-4 flex justify-between items-center px-4 sm:px-6">
          <Link
            to="home"
            smooth={true}
            className="font-paytone text-accent text-base sm:text-lg md:text-xl font-bold cursor-pointer"
          >
            Portfolio
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div className="hidden md:flex gap-4 lg:gap-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                className="text-white hover:text-accent cursor-pointer font-bold whitespace-nowrap"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <MobileMenu sections={sections} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};
