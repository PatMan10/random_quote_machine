class Functions {
  static animate(
    classes: [string, string],
    element: HTMLElement,
    duration: number
  ): void {
    element.classList.add(classes[0], classes[1]);
    setTimeout(
      () => element.classList.remove(classes[0], classes[1]),
      duration
    );
  }

  static getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default Functions;
