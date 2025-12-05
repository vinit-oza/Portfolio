import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'Cricket Detailed Data Analytics',
      description: 'Full-stack data analytics project analyzing 2019 T20 World Cup performance with interactive Power BI dashboard for comprehensive insights.',
      tags: ['Power BI', 'Data Analysis', 'Sports Analytics', 'Python'],
      github: 'https://github.com/vinit-oza/Cricket-project',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop',
    },
    {
      title: 'Sales Insights Business Analytics',
      description: 'Full-stack business intelligence solution with Python, SQL, and Power BI for tracking sales performance and customer behavior patterns.',
      tags: ['Python', 'SQL', 'Power BI', 'Business Intelligence'],
      github: 'https://github.com/vinit-oza/Sales-Insights-Business-analytics-',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Weather Prediction Model',
      description: 'Machine learning model for weather prediction using Python with advanced algorithms for accurate forecasting and data visualization.',
      tags: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn'],
      github: 'https://github.com/vinit-oza/-Project-Weather-Prediction-Model-',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    },
  ]

  return (
    <section id="projects" className="section" style={{ background: '#000' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Featured <span className="highlight">Projects</span>
          </motion.h2>

          <div 
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -15, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                style={{
                  background: 'linear-gradient(145deg, rgba(30, 30, 35, 0.9), rgba(10, 10, 15, 0.95))',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Project Image */}
                <div style={{
                  width: '100%',
                  height: '250px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(167, 139, 250, 0.1))',
                }}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.8,
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(10, 10, 15, 0.9))',
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '15px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: '#aaa',
                    lineHeight: 1.7,
                    marginBottom: '25px',
                    fontSize: '0.95rem',
                  }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '25px',
                  }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '8px 16px',
                          background: 'rgba(139, 92, 246, 0.1)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: '#c4b5fd',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, background: '#8b5cf6', borderColor: '#8b5cf6' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 20px',
                      background: 'rgba(139, 92, 246, 0.2)',
                      border: '1px solid rgba(139, 92, 246, 0.4)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                    }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              textAlign: 'center',
              marginTop: '50px',
            }}
          >
            <motion.a
              href="https://github.com/vinit-oza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              <FaGithub /> View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
