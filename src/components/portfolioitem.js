import React from 'react';
import esch from "../images/escheresque.png"

var imgStyle = {
  'marginBottom': '-6px'
}
var hovered = false;
var togglePseudo = false;

const backStyle = {
  backgroundImage: esch
}



class PortfolioItem extends React.PureComponent {
  constructor(props) {
    super(props);
  this.handleClick=this.handleClick.bind(this);
  this.handleHover=this.handleHover.bind(this);
  }

  handleHover(event) {
    hovered = true;
    if (event.target.className=="pfimage") {
      event.target.firstChild.classList.remove("noClick");
    }
  }


  handleClick(event) {
    if (!hovered) {
      if (togglePseudo) {
        event.target.parentNode.parentNode.parentNode.classList.remove("pseudoHover");
        togglePseudo = false;
      }
      else {
        event.target.parentNode.parentNode.parentNode.classList.add("pseudoHover");
        togglePseudo = true;
      }
    }
  }

  render() {
    const {title, type, description, techs, link, image} = this.props
    return (
      <div className="portfolioleft-list-items">
        <div className="pfimage" onClick={this.handleClick} onMouseOver={this.handleHover}><a href={link} className="noClick"><img src={image} style={imgStyle} /></a></div>
        <div className="pftext-area" style={backStyle}>
          <div className="pftitle"><a href={link}><h1>{title}</h1></a></div>
          <div className="pftype">{type}</div>
          <div className="pfdesc">{description}</div>
          <div className="pftechs">
            {techs.map(tech => (
               <div className="pftech-item">{tech}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem
