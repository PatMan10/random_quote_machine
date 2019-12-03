class Functions {
  static animate(
    classes: [string, string],
    element: any,
    duration: number
  ): void {
    classes.forEach(c => element.classList.add(c));
    setTimeout(
      () => classes.forEach(c => element.classList.remove(c)),
      duration
    );
  }

  static getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default Functions;
