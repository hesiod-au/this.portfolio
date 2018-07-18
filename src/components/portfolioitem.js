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
    //hovered = true;
    console.log(event.target);
    if (event.target.className=="innerImg") {
    // event.target.parentNode.classList.remove("noClick");
    }
    if (event.target.className=="imgLink noClick") {
    //console.log(event.target);
    //event.target.classList.remove("noClick");
    }
    if (event.target.className=="pfimage") {
    // event.target.firstChild.classList.remove("noClick");
    }
  }


  handleClick(event) {
    console.log("click");
    console.log(event.target);
    if (event.target.className=="innerImg" && !hovered) {
      event.preventDefault();
      if (togglePseudo) {
        event.target.parentNode.parentNode.parentNode.classList.remove("pseudoHover");
        togglePseudo = false;
      }
      else {
        event.target.parentNode.parentNode.parentNode.classList.add("pseudoHover");
        togglePseudo = true;
      }
    }
    if (event.target.className=="imgLink noClick" && !hovered) {
      event.preventDefault();
      if (togglePseudo) {
        event.target.parentNode.parentNode.classList.remove("pseudoHover");
        togglePseudo = false;
      }
      else {
        event.target.parentNode.parentNode.classList.add("pseudoHover");
        togglePseudo = true;
      }
    }

    if (event.target.className=="pfimage" && !hovered) {
      event.preventDefault();
      if (togglePseudo) {
        event.target.parentNode.classList.remove("pseudoHover");
        togglePseudo = false;
      }
      else {
        event.target.parentNode.classList.add("pseudoHover");
        togglePseudo = true;
      }
    }
  }

  render() {
    const {title, type, description, techs, link, image} = this.props
    return (
      <div className="portfolioleft-list-items">
        <div className="pfimage" onClick={this.handleClick} onMouseOver={this.handleHover}><a href={link} onClick={this.handleClick} className="imgLink noClick"><img src={image} style={imgStyle} className="innerImg"/></a></div>
        <a href={link} className="text-area-link">
          <div className="pftext-area" style={backStyle}>
            <div className="pftitle"><h1>{title}</h1></div>
            <div className="pftype">{type}</div>
            <div className="pfdesc">{description}</div>
            <div className="pftechs">
              {techs.map(tech => (
                <div className="pftech-item">{tech}</div>
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default PortfolioItem
