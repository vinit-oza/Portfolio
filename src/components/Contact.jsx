import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa'
import FloatingLines from './FloatingLines'

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ 
      background: '#000',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px',
    }}>
      {/* FloatingLines Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
      }}>
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[6, 5, 4]}
          lineDistance={[5, 4, 3]}
          animationSpeed={0.6}
          interactive={true}
          bendRadius={6.0}
          bendStrength={-0.4}
          mouseDamping={0.08}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      {/* Background "Contact" text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 15rem)',
        fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.02)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0,
      }}>
        Contact
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
          }}>
            Contact Me
          </h2>
          <p style={{
            color: '#999',
            fontSize: '1.1rem',
          }}>
            Below are the details to reach out to me!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '25px',
            marginBottom: '80px',
            flexWrap: 'wrap',
          }}
          className="contact-cards-container"
        >
          {/* Address Card */}
          <motion.div
            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '30px 25px',
              background: 'rgba(139, 92, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              minWidth: '220px',
              flex: '1',
              maxWidth: '280px',
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              minWidth: '70px',
              borderRadius: '50%',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              color: '#8b5cf6',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}>
              <FaMapMarkerAlt />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '1px',
              }}>
                ADDRESS
              </h3>
              <p style={{
                color: '#999',
                fontSize: '0.9rem',
              }}>
                Gujarat, India
              </p>
            </div>
          </motion.div>

          {/* Contact Number Card */}
          <motion.div
            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '30px 25px',
              background: 'rgba(139, 92, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              minWidth: '220px',
              flex: '1',
              maxWidth: '280px',
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              minWidth: '70px',
              borderRadius: '50%',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              color: '#8b5cf6',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}>
              <FaPhone />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '1px',
              }}>
                CONTACT NUMBER
              </h3>
              <p style={{
                color: '#999',
                fontSize: '0.9rem',
              }}>
                +91 9898471702
              </p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '30px 25px',
              background: 'rgba(139, 92, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              minWidth: '220px',
              flex: '1',
              maxWidth: '280px',
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              minWidth: '70px',
              borderRadius: '50%',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              color: '#8b5cf6',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}>
              <FaPaperPlane />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '1px',
              }}>
                EMAIL ADDRESS
              </h3>
              <p style={{
                color: '#999',
                fontSize: '0.9rem',
              }}>
                vinitoza1702@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Download Resume Card */}
          <motion.div
            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '30px 25px',
              background: 'rgba(139, 92, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              minWidth: '220px',
              flex: '1',
              maxWidth: '280px',
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              minWidth: '70px',
              borderRadius: '50%',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              color: '#8b5cf6',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}>
              <FaDownload />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '1px',
              }}>
                DOWNLOAD RESUME
              </h3>
              <a 
                href="#rolesresume"
                style={{
                  color: '#999',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.target.style.color = '#999'}
              >
                Resumelink
              </a>
            </div>
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 1024px) {
            .contact-cards-container {
              flex-direction: column !important;
              align-items: center;
            }
          }
        `}</style>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{
            color: '#999',
            fontSize: '1rem',
          }}>
            Find me on
          </span>
          <motion.a
            href="https://www.linkedin.com/in/vinitkumar-prajapati/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#8b5cf6' }}
            style={{
              fontSize: '1.5rem',
              color: '#999',
              transition: 'color 0.3s',
            }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/vinit-oza"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#8b5cf6' }}
            style={{
              fontSize: '1.5rem',
              color: '#999',
              transition: 'color 0.3s',
            }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:vinitoza1702@gmail.com"
            whileHover={{ scale: 1.2, color: '#8b5cf6' }}
            style={{
              fontSize: '1.5rem',
              color: '#999',
              transition: 'color 0.3s',
            }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#8b5cf6' }}
            style={{
              fontSize: '1.5rem',
              color: '#999',
              transition: 'color 0.3s',
            }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#8b5cf6' }}
            style={{
              fontSize: '1.5rem',
              color: '#999',
              transition: 'color 0.3s',
            }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
