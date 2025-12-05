import styled from 'styled-components'

const TagsCard = () => {
  const tags = [
    'Communication Skills',
    'Leadership',
    'Critical Thinking',
    'Timekeeping',
    'Decision-making',
    'teamwork',
    'Statistics',
    'adaptability',
    'Visualization',
    'problem-solving',
  
  ]

  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Soft Skills</span>
        <div className="card__tags">
          <ul className="tag">
            {tags.map((tag, index) => (
              <li key={index} className="tag__name">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    min-height: 300px;
    background: rgba(139, 92, 246, 0.05);
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    border-radius: 15px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  }

  .title {
    font-weight: 700;
    font-size: 1.5em;
    width: 100%;
    margin-bottom: 20px;
    color: #8b5cf6;
    letter-spacing: 0.5px;
  }

  .card__tags {
    width: 100%;
  }

  .tag {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tag__name {
    display: inline-block;
    color: #fff;
    font-size: 0.95em;
    background-color: rgba(139, 92, 246, 0.2);
    padding: 8px 20px;
    border-radius: 25px;
    margin: 6px 8px 6px 0;
    margin-left: 0px;
    position: relative;
    text-transform: capitalize;
    cursor: default;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(10px);
  }

  .tag__name::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8b5cf6;
    left: 8px;
  }

  .tag__name:hover {
    transform: scale(1.05);
    background-color: rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
  }
`

export default TagsCard
