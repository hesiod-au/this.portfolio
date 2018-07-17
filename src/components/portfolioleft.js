import React from 'react';
import PortfolioItem from './portfolioitem'

class PortfolioLeft extends React.PureComponent {
  render() {
    const { portfolios } = this.props;
    return (
      <div className="portfolioleft-list">
        {portfolios.map(portItem => (
          <PortfolioItem
            title={portItem.title}
            type={portItem.type}
            description={portItem.description}
            techs={portItem.techs}
            link={portItem.link}
            key={portItem.title}
            image={portItem.image}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioLeft;

