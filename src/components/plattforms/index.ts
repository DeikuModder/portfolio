import Desktop from "./Desktop";
import Movile from "./Movile";
import Web from "./Web";

const Plattforms = {
  Desktop,
  Movile,
  Web,
};

export const PlattformsArr = Object.values(Plattforms);
export const PlattformsNames = Object.keys(Plattforms);

export default Plattforms;
