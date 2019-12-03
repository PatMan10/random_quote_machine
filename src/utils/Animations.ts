let index: number = 0;

function getIndex(): number {
  const curI = index;
  index++;
  if (index === 4) index = 0;
  return curI;
}

class Animations {
  static getAnimation(): [string, string] {
    const arrAnimations = [
      "fadeInDown",
      "fadeInRight",
      "fadeInUp",
      "fadeInLeft"
    ];
    return ["animated", arrAnimations[getIndex()]];
  }
}

export default Animations;
