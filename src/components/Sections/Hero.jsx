import { motion } from 'framer-motion';

export const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#FFB48A_70%)] z-0" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-2xl h-full"
    >
      {/* <div className="relative w-full h-full">
        <img
          src="/images/Pic.jpg"
          alt="Profile"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
      </div> */}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="container mx-auto px-6 relative z-10"
    >
      <div className="max-w-3xl">
        <motion.h1
          className="font-paytone text-[12rem] leading-none text-accent mb-4 select-none"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.8
          }}
        >
          MARIANA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-2xl font-light mb-6 text-white">Frontend Developer</p>
          <p className="text-xl text-white/80 max-w-lg">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
