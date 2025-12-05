import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })

  const tools = [
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python--v1.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/mongodb.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
    { name: 'n8n', icon: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
    { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'Power BI', icon: 'https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/ios-glyphs/96/github.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
    { name: 'Tableau', icon: 'https://img.icons8.com/color/96/tableau-software.png' },
    { name: 'ChatGPT', icon: 'https://img.icons8.com/color/96/chatgpt.png' },
    { name: 'Gemini', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png' },
    { name: 'Jupyter', icon: 'https://img.icons8.com/fluency/96/jupyter.png' },
    { name: 'Google Colab', icon: 'https://img.icons8.com/color/96/google-colab.png' },
    { name: 'PyCharm', icon: 'https://img.icons8.com/color/96/pycharm--v2.png' },
    { name: 'Kiro', icon: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#8B5CF6"/><path d="M35 35 Q35 65 50 65 Q50 50 50 35" fill="white"/><circle cx="40" cy="45" r="4" fill="#8B5CF6"/><circle cx="55" cy="45" r="4" fill="#8B5CF6"/></svg>') },
    { name: 'Confluence', icon: 'https://img.icons8.com/color/96/confluence--v2.png' },
    { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
    { name: 'Anaconda', icon: 'https://img.icons8.com/dusk/96/anaconda--v2.png' },
    { name: 'Antigravity', icon: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="#1a1a1a"/><defs><linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ff0000"/><stop offset="25%" style="stop-color:#ffff00"/><stop offset="50%" style="stop-color:#00ff00"/><stop offset="75%" style="stop-color:#00ffff"/><stop offset="100%" style="stop-color:#0066ff"/></linearGradient></defs><path d="M50 15 L20 85 Q50 70 80 85 Z" fill="url(#rainbow)"/></svg>') },
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = container.querySelectorAll('.floating-icon')
    const total = items.length
    const radius = 200

    // Diagonal rotation angles
    let angleX = 0
    let angleY = 0
    
    // Base speed for diagonal spin
    const baseSpeedX = 0.002
    const baseSpeedY = 0.003

    const goldenRatio = (1 + Math.sqrt(5)) / 2
    
    const getPosition = (index, rotX, rotY) => {
      const y = 1 - (index / (total - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = 2 * Math.PI * index / goldenRatio

      let x = Math.cos(theta) * radiusAtY
      let z = Math.sin(theta) * radiusAtY

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      const y1 = y * cosX - z * sinX
      const z1 = y * sinX + z * cosX
      const x1 = x * cosY + z1 * sinY
      const z2 = -x * sinY + z1 * cosY

      return { x: x1 * radius, y: y1 * radius, z: z2 * radius }
    }

    const animate = () => {
      // Apply velocity from mouse drag
      if (!isDragging.current) {
        // Gradually slow down to base speed
        velocity.current.x *= 0.95
        velocity.current.y *= 0.95
        
        // Add base diagonal rotation
        angleX += baseSpeedX + velocity.current.x
        angleY += baseSpeedY + velocity.current.y
      } else {
        angleX += velocity.current.x
        angleY += velocity.current.y
      }

      items.forEach((item, i) => {
        const pos = getPosition(i, angleX, angleY)
        
        const normalizedZ = (pos.z + radius) / (2 * radius)
        const scale = normalizedZ * 0.5 + 0.5
        const opacity = normalizedZ * 0.6 + 0.4

        item.style.transform = `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${scale})`
        item.style.opacity = opacity
        item.style.zIndex = Math.round(pos.z + 500)
      })

      requestAnimationFrame(animate)
    }

    // Mouse/Touch handlers for drag interaction
    const handleMouseDown = (e) => {
      isDragging.current = true
      lastMouse.current = { x: e.clientX, y: e.clientY }
      container.style.cursor = 'grabbing'
    }

    const handleMouseMove = (e) => {
      if (!isDragging.current) return
      
      const deltaX = e.clientX - lastMouse.current.x
      const deltaY = e.clientY - lastMouse.current.y
      
      velocity.current.x = deltaY * 0.008
      velocity.current.y = deltaX * 0.008
      
      lastMouse.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    const handleMouseLeave = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    // Touch handlers
    const handleTouchStart = (e) => {
      isDragging.current = true
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const handleTouchMove = (e) => {
      if (!isDragging.current) return
      
      const deltaX = e.touches[0].clientX - lastMouse.current.x
      const deltaY = e.touches[0].clientY - lastMouse.current.y
      
      velocity.current.x = deltaY * 0.008
      velocity.current.y = deltaX * 0.008
      
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    animate()

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <section id="skills" className="section" style={{ 
      background: '#000', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ width: '100%', maxWidth: '1400px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
            style={{ textAlign: 'center', display: 'block', marginBottom: '60px' }}
          >
            Technical <span className="highlight">Skills</span>
          </motion.h2>

          <div className="skills-layout" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}>
            {/* LEFT - 3D Floating Icons Sphere */}
            <div
              ref={containerRef}
              style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1000px',
                cursor: 'grab',
                userSelect: 'none',
              }}
            >
              {tools.map((tool) => (
                <img
                  key={`float-${tool.name}`}
                  className="floating-icon"
                  src={tool.icon}
                  alt={tool.name}
                  style={{
                    position: 'absolute',
                    width: '45px',
                    height: '45px',
                    objectFit: 'contain',
                    filter: tool.name === 'GitHub' ? 'invert(1)' : 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
              ))}
            </div>

            {/* RIGHT - Grid Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
            }}
            className="cards-grid"
            >
              {tools.map((tool, i) => (
                <motion.div
                  key={`card-${tool.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(139, 92, 246, 0.5)',
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '20px 12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                        filter: tool.name === 'GitHub' ? 'invert(0.8)' : 'none',
                        opacity: 0.9,
                      }}
                    />
                  </div>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.7rem',
                    textAlign: 'center',
                    fontWeight: 400,
                  }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .skills-layout {
            grid-template-columns: 1fr !important;
          }
          .cards-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
