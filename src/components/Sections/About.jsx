export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-paytone text-accent text-center mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-base sm:text-lg md:text-xl">
          <p className="text-gray-700 leading-relaxed text-center">
            I&apos;m a passionate Frontend Developer with a keen eye for design and a love for creating intuitive user experiences. With expertise in React and modern web technologies, I transform creative ideas into responsive, accessible, and performant web applications.
          </p>
          <p className="text-gray-700 leading-relaxed text-center">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
