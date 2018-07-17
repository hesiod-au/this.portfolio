import placeholder from "../images/placeholder.png";
import koganwatch from "../images/koganwatch.png";
import cartesian from "../images/cartesian.png";
import americancorrespondent from "../images/americancorrespondent.png"
import straighttalk from "../images/straighttalk.png"
import thisport from "../images/thisport.png"

export default [
  {
    "title": "KoganWatch",
    "type":"Web App",
    "description": "A Ruby on Rails app that scrapes data from online retailer Kogan.com. The scraping component is no longer maintained so it does not gather new data, but the demo shows changes in Kogan prices over nine months.",
    "techs": ["Ruby", "Rails", "HTML", "CSS","JS", "MySQL"],
    "link": "https://www.jcole.id.au/koganwatch/products/show?utf8=%E2%9C%93&search=tv&commit=Search",
    "image": koganwatch
  },
  {
    "title": "this.portfolioSite",
    "type":"Website",
    "description": "This Site! A React website that pulls data from a file and dynamically creates portfolio presentation elements. Built from React Components, mobile first, responsive design, with CSS grid and animations used throughout. Built from scratch using a blank Gatsby framework: all CSS, React JS, and HTML is mine. ",
    "techs": ["React", "HTML", "CSS","JS"],
    "link": "https://github.com/hesiod-au/this.portfolio.git",
    "image": thisport
  },
  {
    "title": "Cartesian",
    "type":"Game",
    "description": "Built in GameMaker Language (A JS-like language) in GameMakerPro. Coded from scratch, game design is from memories of the 80's game Xonix. Retro CGA colour scheme is intentional. PC version runs a tiny bit smoother than the HTML5 compile.",
    "techs": ["GML"],
    "link": "https://www.jcole.id.au/cartesian",
    "image": cartesian
  },
  {
    "title": "The American Correspondent",
    "type":"Website",
    "description": "A news-magazine style site that doesn’t pull punches, appeals to conservatives and leaves plenty of space for advertising. A working site backed by a CMS, delivered to the client in under 48 hours.",
    "techs": ["Wordpress", "HTML", "CSS","JS","PHP","MySQL"],
    "link": "https://www.theamericancorrespondent.com",
    "image": americancorrespondent
  },
  {
    "title": "Straight Talk",
    "type":"Website",
    "description": "A brochure style website which incorporates Straight Talk's corporate colour scheme and conveys professionalism, honesty and openness.",
    "techs": ["Wordpress", "HTML", "CSS","JS","PHP","MySQL"],
    "link": "http://www.straight-talk.com.au",
    "image": straighttalk
  }
];
