import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const certifications = [
    {
      title: 'ETL Process',
      issuer: 'Microsoft',
      grade: '96.06%',
      image: `${import.meta.env.BASE_URL}Microsoft.png`,
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/8VD1TFJXU2XT',
      description: 'A Microsoft ETL certification focuses on skills related to data integration using Microsoft tools like Power BI or Azure services.',
    },
    {
      title: 'Generative AI for Data Analysts',
      issuer: 'IBM',
      grade: '93.86%',
      image: `${import.meta.env.BASE_URL}IBM.png`,
      verifyLink: 'https://www.coursera.org/account/accomplishments/specialization/YK5SU2GETIRJ',
      description: 'Advanced course on leveraging generative AI tools for data analysis workflows.',
    },
    {
      title: 'Agile Project Management',
      issuer: 'Google',
      grade: '96%',
      image: `${import.meta.env.BASE_URL}Google.png`,
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/V2KJ78YSYZZK',
      description: 'Professional certification in Agile methodologies and project management practices.',
    },
  ]

  return (
    <section id="certifications" className="section" style={{ background: '#000' }}>
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
            Certifications & <span className="highlight">Courses</span>
          </motion.h2>

          <CertGrid>
            {certifications.map((cert, i) => (
              <CardWrapper
                key={cert.title}
                as={motion.div}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <FlipCard className="card">
                  {/* Front - Certificate Image */}
                  <CertificateImage 
                    src={cert.image} 
                    alt={`${cert.issuer} Certificate`}
                  />

                  {/* Back - Content */}
                  <CardContent className="card__content">
                    <GradeBadge>{cert.grade}</GradeBadge>
                    
                    <CardTitle className="card__title">{cert.title}</CardTitle>
                    
                    <CardIssuer>{cert.issuer}</CardIssuer>
                    
                    <CardDescription className="card__description">
                      {cert.description}
                    </CardDescription>

                    <DownloadButton type="button" onClick={() => window.open(cert.verifyLink, '_blank')}>
                      <span className="button__text">Click to Verify</span>
                      <span className="button__icon">
                        <svg className="svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </DownloadButton>
                  </CardContent>
                </FlipCard>
              </CardWrapper>
            ))}
          </CertGrid>
        </motion.div>
      </div>
    </section>
  )
}

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  perspective: 1000px;
`;

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(10, 10, 10, 0.95));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px rgba(139, 92, 246, 0.2);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(139, 92, 246, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
  }

  &:hover img {
    scale: 0;
    opacity: 0;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: linear-gradient(145deg, rgba(139, 92, 246, 0.15), rgba(10, 10, 10, 0.98));
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${FlipCard}:hover & {
    transform: rotateX(0deg);
  }
`;

const GradeBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
  color: #0a0a0a;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 2;
`;

const CardTitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
`;

const CardIssuer = styled.p`
  margin: 0 0 15px 0;
  font-size: 1rem;
  color: #8b5cf6;
  font-weight: 600;
`;

const CardDescription = styled.p`
  margin: 0 0 20px 0;
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
`;

const DownloadButton = styled.button`
  --main-focus: #8b5cf6;
  --font-color: #dedede;
  --bg-color-sub: #1a1a1a;
  --bg-color: #2a2a2a;
  --main-color: #8b5cf6;
  
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
  margin-top: auto;

  .button__text {
    transform: translateX(21px);
    color: var(--font-color);
    font-weight: 600;
    transition: all 0.3s;
  }

  .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .svg {
    width: 20px;
    fill: var(--main-color);
  }

  &:hover {
    background: var(--bg-color);
  }

  &:hover .button__text {
    color: transparent;
  }

  &:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
  }
`;

export default Certifications
