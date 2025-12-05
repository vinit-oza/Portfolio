import styled from 'styled-components'

const SpinningCube = () => {
  const labels = ['Data Engineer', 'Data Analyst', 'Business Analyst', 'DataOps']

  return (
    <StyledWrapper>
      <div className="cube-loader">
        <div className="cube-top" />
        <div className="cube-wrapper">
          {labels.map((label, index) => (
            <span key={index} className="cube-span" style={{ '--i': index }}>
              <span className="cube-text">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .cube-loader {
    position: relative;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-loader .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube-loader .cube-wrapper .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    background: linear-gradient(
      to bottom,
      hsl(270, 70%, 60%) 0%,
      hsl(270, 70%, 50%) 50%,
      hsl(270, 70%, 40%) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube-text {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    padding: 10px;
    line-height: 1.2;
  }

  .cube-top {
    position: absolute;
    width: 150px;
    height: 150px;
    background: hsl(270, 70%, 40%);
    transform: rotateX(90deg) translateZ(75px);
    transform-style: preserve-3d;
  }

  .cube-top::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    
    transform: translateZ(-90px);
    filter: blur(10px);
    
  }
`

export default SpinningCube
