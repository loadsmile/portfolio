import { Container } from '../Layout/Container';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Contact = () => (
  <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-white">
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-paytone text-accent mb-8 sm:mb-12">
          Contact
        </h2>
        <div className="flex gap-6 sm:gap-8 md:gap-12 justify-center items-center">
          <a
            href="https://github.com/loadsmile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/mvaladares/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="mailto:marianavaladares@gmail.com"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default Contact;
