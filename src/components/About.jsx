import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'
import styled from 'styled-components'
import TagsCard from './TagsCard'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }



  return (
    <>
      {/* About Me Section */}
      <section id="about" className="section" style={{ background: '#000' }}>
        <div className="container">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants} className="section-title">
              About <span className="highlight">Me</span>
            </motion.h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'start',
            }}>
              {/* Left Column - Bio */}
              <motion.div variants={itemVariants}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.9,
                  color: '#ccc',
                  marginBottom: '30px',
                }}>
                  I'm a <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Computer Science student</span> with 
                  a traditional mindset and a modern skillset. I'm deeply passionate about 
                  <span style={{ color: '#8b5cf6', fontWeight: 600 }}> Data Engineer, Data Analytics, and Business Analytics</span>, 
                  constantly exploring how data can be turned into smart decisions and real-world impact.
                </p>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#999',
                }}>
                  Currently pursuing my Bachelor of Technology degree at Parul University with a focus on Big Data Analytics. 
                  I combine technical expertise with business acumen to deliver actionable insights.
                </p>
              </motion.div>

              {/* Right Column - Profile Card */}
              <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center' }}>
                <StyledWrapper>
                  <div className="cardContainer">
                    <div className="profileDiv">
                      <img src="/profile.jpg" alt="Vinit Prajapati" className="profile-image" />
                    </div>
                    <div className="infoDiv">
                      <div className="nameDiv">
                        <p className="name">Vinit Prajapati</p>
                        <p className="role">DataOps</p>
                      </div>
                      <div className="socialDiv">
                        <a href="#github">
                          <svg viewBox="0 0 496 512" className="socials github">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                          </svg>
                        </a>
                        <a href="#linkedin">
                          <svg viewBox="0 0 448 512" className="socials linkedin">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                        <a href="#instagram">
                          <svg className="socials instagram" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </StyledWrapper>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education and Skills Section */}
      <section className="section" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Education & <span className="highlight">Skills</span>
            </motion.h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}>
              {/* Education Timeline */}
              <motion.div
                variants={itemVariants}
                style={{
                  padding: '30px',
                  background: 'rgba(139, 92, 246, 0.03)',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  borderRadius: '15px',
                }}
              >
                <h4 style={{ color: '#8b5cf6', marginBottom: '25px', fontSize: '1.2rem' }}>Education</h4>
                <div style={{ borderLeft: '2px solid #8b5cf6', paddingLeft: '20px' }}>
                  <div style={{ marginBottom: '25px' }}>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem' }}>B.TECH in CSE - Big Data Analytics</p>
                    <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '5px' }}>Parul University (PIET) • 2022-2026</p>
                    <p style={{ color: '#8b5cf6', fontSize: '0.9rem', marginTop: '5px' }}>CGPA: 7.25</p>
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem' }}>Higher Secondary School</p>
                    <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '5px' }}>ShreeRam Vidhayalaya • 2021-2022</p>
                    <p style={{ color: '#8b5cf6', fontSize: '0.9rem', marginTop: '5px' }}>First Class Distinction</p>
                  </div>
                </div>
              </motion.div>

              {/* Skills Tags Card */}
              <motion.div variants={itemVariants}>
                <TagsCard />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

const StyledWrapper = styled.div`
  .cardContainer {
    width: 300px;
    height: 350px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition-duration: .5s;
    cursor: pointer;
  }

  .profileDiv {
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(24, 24, 24);
    transition-duration: .5s;
    color: rgb(155, 155, 155);
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .cardContainer:hover .profileDiv {
    transform: translateX(-25%) translateY(-20%);
    transition-duration: .5s;
  }

  .infoDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    z-index: 1;
  }

  .nameDiv {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(255, 255, 255);
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    gap: 2px;
  }

  .name {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  .role {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: rgb(48, 48, 48);
    margin-bottom: 5px;
  }

  .socialDiv {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(14, 14, 14);
    gap: 25px;
  }

  .infoDiv a {
    width: 50%;
    transition: all 0.3s;
  }

  .infoDiv a:hover {
    transform: scale(1.15);
  }

  .socials {
    width: 100%;
    fill: rgb(14, 14, 14);
    transition: all 0.3s;
  }

  .socials:hover {
    fill: rgb(100, 100, 100);
  }
`

export default About
