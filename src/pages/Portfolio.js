import PortModel from "../model/PortModel";
import Cocktail from "../images/DrinkAppDesktop.png";
import ecom from "../images/jRomeb.png";

function Portfolio() {
  return (
    <PortModel
      title={"Angular Project(s)"}
      img={Cocktail}
      title1={"React Project(s)"}
      img1={ecom}
    />
  );
}

export default Portfolio;
