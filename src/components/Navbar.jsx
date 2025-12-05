import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#rolesresume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: scrolled ? '20px 0' : '30px 0',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            pointerEvents: 'auto',
          }}
        >
        {/* Centered Glass Nav Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            padding: '12px 30px',
            background: scrolled
              ? 'rgba(0, 0, 0, 0.7)'
              : 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4)'
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.05, color: '#8b5cf6' }}
              style={{
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.3s',
                whiteSpace: 'nowrap',
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            color: '#8b5cf6',
            fontSize: '1.3rem',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
        </motion.nav>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="mobile-nav"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '70%',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '100px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              zIndex: 999,
              borderLeft: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                whileHover={{ x: 10, color: '#8b5cf6' }}
                style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  transition: 'all 0.3s',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
