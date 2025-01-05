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
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="container mx-auto px-4 sm:px-6 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="font-paytone text-6xl sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[16rem] leading-[0.9] lg:leading-[0.8] text-accent mb-4 select-none tracking-tight"
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
          className="mt-6 sm:mt-8"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-white">Frontend Developer</p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
