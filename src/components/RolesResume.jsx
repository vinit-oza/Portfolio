import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RolesResume = () => {
  const [activeTab, setActiveTab] = useState('engineer');

  const roles = {
    engineer: {
      level: "Data Engineer",
      downloadLink: "https://drive.google.com/file/d/18h7rZnGk2Fh_BO9RC38aVC3EjOksbUK1/view?usp=sharing",
    },
    analyst: {
      level: "Data Analyst",
      downloadLink: "https://drive.google.com/file/d/18h7rZnGk2Fh_BO9RC38aVC3EjOksbUK1/view?usp=sharing",
    },
    business: {
      level: "Business Analyst",
      downloadLink: "https://drive.google.com/file/d/11QZsbKDLCE9har7GIc6tevGaSNVS-bFg/view?usp=sharing",
    }
  };

  return (
    <section id="rolesresume" className="section" style={{ background: '#000' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Roles & <span className="highlight">Resume</span>
          </h2>
          
        </motion.div>

        <ContentLayout>
          <LeftColumn>
            <StyledWrapper>
              <div className="wrap">
                <input 
                  hidden 
                  className="rd-1" 
                  name="radio" 
                  id="rd-1" 
                  type="radio" 
                  checked={activeTab === 'engineer'}
                  onChange={() => setActiveTab('engineer')}
                />
                <label className="label" htmlFor="rd-1">
                  <span>Data Engineer</span>
                </label>

                <input 
                  hidden 
                  className="rd-2" 
                  name="radio" 
                  id="rd-2" 
                  type="radio"
                  checked={activeTab === 'analyst'}
                  onChange={() => setActiveTab('analyst')}
                />
                <label className="label" htmlFor="rd-2">
                  <span>Data Analyst</span>
                </label>

                <input 
                  hidden 
                  className="rd-3" 
                  name="radio" 
                  id="rd-3" 
                  type="radio"
                  checked={activeTab === 'business'}
                  onChange={() => setActiveTab('business')}
                />
                <label className="label" htmlFor="rd-3">
                  <span>Business Analyst</span>
                </label>

                <div className="bar" />
                <div className="slidebar" />
              </div>

              <RoleCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeTab}
                transition={{ duration: 0.4 }}
              >
                <CardHeader>
                  <LevelBadge>{roles[activeTab].level}</LevelBadge>
                  <RoleTitle>{roles[activeTab].title}</RoleTitle>
                </CardHeader>
                
                <CardDescription>{roles[activeTab].description}</CardDescription>
                
                <DownloadButton 
                  as="a" 
                  href={roles[activeTab].downloadLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download CV
                  <svg className="w-6 h-6 fill-current" height={100} preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width={100} xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd" />
                  </svg>
                </DownloadButton>

                <UserIconBg className="user-icon-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit={10} strokeWidth={5} />
                  </svg>
                </UserIconBg>
                
                <UserIconFg className="user-icon-fg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit={10} strokeWidth={2} />
                  </svg>
                </UserIconFg>
              </RoleCard>
            </StyledWrapper>
          </LeftColumn>

          <RightColumn
            as={motion.div}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GitHubCard />
          </RightColumn>
        </ContentLayout>
      </div>
    </section>
  );
};

const Subtitle = styled.p`
  text-align: center;
  color: #999;
  font-size: 1.1rem;
  margin-bottom: 4rem;
`;

const StyledWrapper = styled.div`
  --color-pure: #fff;
  --color-primary: rgba(255, 255, 255, 0.05);
  --color-secondary: #999;
  --muted: rgba(139, 92, 246, 0.2);
  --round: 15px;
  --p-x: 12px;
  --p-y: 8px;
  --w-label: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .wrap {
    display: flex;
    align-items: center;
    padding: var(--p-y) var(--p-x);
    position: relative;
    background: var(--color-primary);
    border: 1px solid rgba(139, 92, 246, 0.15);
    border-radius: var(--round);
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  }

  .wrap input {
    height: 0;
    width: 0;
    position: absolute;
    overflow: hidden;
    display: none;
    visibility: hidden;
  }

  .label {
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: var(--color-secondary);
    background: transparent;
    padding: 18px 24px;
    width: var(--w-label);
    min-width: var(--w-label);
    text-decoration: none;
    user-select: none;
    transition: color 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
  }

  .label span {
    overflow: visible;
    text-overflow: clip;
  }

  .wrap input[class*="rd-"]:checked + label {
    color: var(--color-pure);
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    transform-origin: 0 0 0;
    height: 100%;
    width: var(--w-label);
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }

  .bar::before,
  .bar::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
  }

  .bar::before {
    top: 0;
    border-radius: 0 0 9999px 9999px;
  }

  .bar::after {
    bottom: 0;
    border-radius: 9999px 9999px 0 0;
  }

  .slidebar {
    position: absolute;
    height: calc(100% - (var(--p-y) * 4));
    width: var(--w-label);
    border-radius: calc(var(--round) - var(--p-y));
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(167, 139, 250, 0.3));
    transform-origin: 0 0 0;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }

  .rd-1:checked ~ .bar,
  .rd-1:checked ~ .slidebar {
    transform: translateX(0) scaleX(1);
  }

  .rd-2:checked ~ .bar,
  .rd-2:checked ~ .slidebar {
    transform: translateX(100%) scaleX(1);
  }

  .rd-3:checked ~ .bar,
  .rd-3:checked ~ .slidebar {
    transform: translateX(200%) scaleX(1);
  }

  @media (max-width: 768px) {
    --w-label: 140px;

    .label {
      font-size: 0.95rem;
      padding: 16px 20px;
    }
  }

  @media (max-width: 480px) {
    --w-label: 120px;

    .label {
      font-size: 0.85rem;
      padding: 14px 16px;
    }
  }
`;

const RoleCard = styled.div`
  position: relative;
  background: linear-gradient(145deg, rgba(139, 92, 246, 0.08), rgba(10, 10, 10, 0.9));
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 240px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }

  &:hover .user-icon-bg,
  &:hover .user-icon-fg {
    transform: scale(1.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 220px;
    max-width: 380px;
  }
`;

const CardHeader = styled.div`
  color: #ffffff;
  z-index: 2;
  position: relative;
`;

const LevelBadge = styled.span`
  font-weight: 700;
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.25rem;
  color: #8b5cf6;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RoleTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #999;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const DownloadButton = styled.a`
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  width: fit-content;
  font-size: 0.9rem;
  text-decoration: none;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: currentColor;
  }

  &:hover {
    background: #8b5cf6;
    color: #fff;
    border-color: #8b5cf6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const UserIconBg = styled.svg`
  position: absolute;
  bottom: -0.125rem;
  right: -4rem;
  width: 10rem;
  height: 10rem;
  z-index: 1;
  margin: -0.5rem;
  fill: rgba(139, 92, 246, 0.05);
  stroke: rgba(139, 92, 246, 0.15);
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    right: -3rem;
  }
`;

const UserIconFg = styled.svg`
  position: absolute;
  bottom: -0.125rem;
  right: -4rem;
  width: 10rem;
  height: 10rem;
  z-index: 1;
  margin: -0.5rem;
  fill: rgba(139, 92, 246, 0.08);
  stroke: rgba(139, 92, 246, 0.25);
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    right: -3rem;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 420px;
`;

const GitHubCard = () => {
  return (
    <GitHubCardWrapper>
      <svg style={{position: 'absolute', width: 0, height: 0}}>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0" />
        </filter>
        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" />
        </filter>
        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0" />
        </filter>
      </svg>
      <div className="card-container">
        <div className="spin spin-blur" />
        <div className="spin spin-intense" />
        <div className="backdrop" />
        <div className="card-border">
          <div className="spin spin-inside" />
        </div>
        <div className="card">
          <div className="header">
            <div className="top-header">
              <div className="gh-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </div>
              <div className="repo">
                <a className="repo-owner" href="#">Portfolio</a>
                <span className="repo-slash">/</span>
                <a className="repo-name" href="#">Projects</a>
              </div>
            </div>
            <div className="btm-header">
              <div className="tab active">
                <div className="tab-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="tab-text">Contributions</div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="prs">
              <a href="https://github.com/vinit-oza/Cricket-project" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">Cricket Data Analytics</div>
                  <div className="pr-desc">Power BI Dashboard</div>
                </div>
              </a>
              <a href="https://github.com/vinit-oza/Sales-Insights-Business-analytics-" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">Sales Insights Business Analytics</div>
                  <div className="pr-desc">Python, SQL & Power BI</div>
                </div>
              </a>
              <a href="https://github.com/vinit-oza/-Project-Weather-Prediction-Model-" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">Weather Prediction Model</div>
                  <div className="pr-desc">Python, ML, Kiro</div>
                </div>
              </a>
              <a href="https://github.com/vinit-oza/Credit-Card-Fraud-Analysis-ML-" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">Credit Card Fraud Analysis</div>
                  <div className="pr-desc">Python, ML, Kiro</div>
                </div>
              </a>
              <a href="https://github.com/vinit-oza/HR-Analytics" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">HR Analytics</div>
                  <div className="pr-desc">Excel & Power BI</div>
                </div>
              </a>
              <a href="https://github.com/vinit-oza/Store-_Power-BI-Dashboard" target="_blank" rel="noopener noreferrer" className="pr">
                <div className="pr-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="pr-text">
                  <div className="pr-title">Store Power BI Dashboard</div>
                  <div className="pr-desc">Power BI & Jupyter</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </GitHubCardWrapper>
  );
};

const GitHubCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  .card-container {
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 420px;
    border-radius: 1em;
  }

  .card-border {
    position: absolute;
    inset: 0;
    background: rgba(139, 92, 246, 0.2);
    border-radius: inherit;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }

  .card {
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: linear-gradient(145deg, rgba(139, 92, 246, 0.05), #111215);
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .header {
    background: #0b0d10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid #1d1f23;
  }

  .top-header {
    background: #0b0d10;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 12px;
  }

  .repo > a, .repo > span {
    text-decoration: none;
    color: #bebebe;
    font-weight: 300;
    font-size: 14px;
  }

  .repo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .repo-slash {
    font-size: 10px;
    pointer-events: none;
  }

  .repo-name {
    color: #fff;
    font-weight: 400;
  }

  .gh-icon, .gh-icon svg {
    height: 2em;
    fill: #8b5cf6;
  }

  .btm-header {
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    gap: 8px;
    color: #fff;
    fill: #fff;
  }

  .tab {
    position: relative;
    padding: 4px 4px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .tab-icon {
    width: 1em;
    height: 1.25em;
    fill: #797d86;
  }

  .tab.active {
    border-bottom: 2px solid #8b5cf6;
  }

  .tab.active .tab-icon {
    fill: #8b5cf6;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

  .prs {
    margin: 12px;
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #343539;
    border-radius: 6px;
    overflow: auto;
  }

  .prs::-webkit-scrollbar {
    width: 4px;
  }

  .prs::-webkit-scrollbar-thumb {
    background: #8b5cf6;
    border-radius: 4px;
  }

  .pr {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    outline: 1px solid #343539;
    padding: 12px;
    transition: background 0.3s;
    text-decoration: none;
    color: inherit;
  }

  .pr:hover {
    background: rgba(139, 92, 246, 0.05);
  }

  .pr:visited {
    color: inherit;
  }

  .pr-icon {
    display: flex;
    width: 1em;
    height: 1em;
    fill: #8b5cf6;
    flex-shrink: 0;
  }

  .pr-text {
    display: flex;
    flex-direction: column;
  }

  .pr-title {
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
  }

  .pr-title:hover {
    color: #8b5cf6;
  }

  .pr-desc {
    padding-left: 2px;
    font-size: 11px;
    color: #797d86;
  }

  .backdrop {
    position: absolute;
    inset: -100%;
    background: radial-gradient(circle at 50% 50%, #0000 0, #0000 20%, #111111aa 50%);
    background-size: 3px 3px;
    z-index: -1;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(3em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.5em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, #8b5cf6, #0000 46% 54%, #a78bfa);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, #9d6ff8, #0000 35% 65%, #b89ffa);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, #b89ffa, #0000 35% 65%, #d4c5fc);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    to {
      rotate: 370deg;
    }
  }

  @media (max-width: 768px) {
    .card-container {
      max-width: 380px;
      height: 380px;
    }
  }
`;

export default RolesResume;
