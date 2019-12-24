import F from "./Functions";
import ColorNames from "./ColorNames";

class Colors {
  static getColor(): string {
    const randomIndex = F.getRandomInt(ColorNames.length);
    return ColorNames[randomIndex];
  }
}

export default Colors;
