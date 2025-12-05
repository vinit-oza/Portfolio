import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'
import LightRays from './LightRays'
import DarkVeil from './DarkVeil'
import CubeLoader from './CubeLoader'
import SpinningCube from './SpinningCube'

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#000',
        position: 'relative',
        padding: '100px 20px 50px',
        overflow: 'hidden',
      }}
    >
      {/* DarkVeil Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      >
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={2.5}
          scanlineFrequency={0}
          warpAmount={0.8}
          resolutionScale={1}
        />
      </div>

      {/* Light Rays Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#8b5cf6"
        raysSpeed={0.5}
        lightSpread={1.5}
        rayLength={1.5}
        pulsating={false}
        fadeDistance={1.2}
        saturation={0.8}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.1}
        distortion={0.05}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '60px' }}>
        <div style={{ maxWidth: '900px', marginLeft: 0, flex: 1 }}>
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: '#8b5cf6',
              fontSize: '1.2rem',
              fontWeight: 500,
              letterSpacing: '3px',
              marginBottom: '20px',
            }}
          >
            👋 HELLO, I'M
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Ephesis, cursive',
              fontSize: 'clamp(3.5rem, 10vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '10px',
              color: '#fff',
            }}
          >
            Vinit
            <br />
            <span style={{ color: '#8b5cf6' }}>Prajapati</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: '#888',
              marginBottom: '30px',
              fontWeight: 300,
            }}
          >
           
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: '1.1rem',
              color: '#aaa',
              maxWidth: '600px',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}
          >
            A Computer Science student with a traditional mindset and a modern
            skillset. Passionate about turning data into smart decisions and
            real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '50px',
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#rolesresume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{ display: 'flex', gap: '25px' }}
          >
            <motion.a
              href="https://www.linkedin.com/in/vinitkumar-prajapati/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#8b5cf6' }}
              style={{
                fontSize: '1.5rem',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/vinit-oza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#8b5cf6' }}
              style={{
                fontSize: '1.5rem',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:vinitoza1702@gmail.com"
              whileHover={{ y: -5, color: '#8b5cf6' }}
              style={{
                fontSize: '1.5rem',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Cubes on Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
          className="cube-container"
        >
          <SpinningCube />
          <CubeLoader />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            color: '#888',
            letterSpacing: '2px',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #8b5cf6, transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .cube-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
