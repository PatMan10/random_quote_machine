import F from "../../../utils/Functions";

describe("Functions", () => {
  it("F.getRandomInt", () => {
    const int_0 = F.getRandomInt(10);
    const int_1 = F.getRandomInt(100);
    const int_2 = F.getRandomInt(1000);

    expect(int_0 >= 0 && int_0 <= 10).toBe(true);
    expect(int_1 >= 0 && int_1 <= 100).toBe(true);
    expect(int_2 >= 0 && int_2 <= 1000).toBe(true);
  });

  describe("F.animate", () => {
    const div = document.createElement("div");

    it("F.animate should add 2 css classes to the HTMLElement", async () => {
      F.animate(["animate", "fadeInDown"], div, 1000);
      expect(div.classList.contains("animate")).toBe(true);
      expect(div.classList.contains("fadeInDown")).toBe(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
    });

    it("HTMLElement should have no css classes", () => {
      expect(div.classList.contains("animate")).toBe(false);
      expect(div.classList.contains("fadeInDown")).toBe(false);
    });
  });
});
