import Animations from "../../../utils/Animations";

describe("Animations", () => {
  it("test 0", () => {
    const tuple_0 = Animations.getAnimation();
    expect(tuple_0.length).toBe(2);
    expect(typeof tuple_0[0]).toBe("string");
    expect(typeof tuple_0[1]).toBe("string");
    expect(tuple_0[0]).toBe("animated");
    expect(tuple_0[1]).toBe("fadeInDown");
  });

  it("test 1", () => {
    const tuple_1 = Animations.getAnimation();
    expect(tuple_1.length).toBe(2);
    expect(typeof tuple_1[0]).toBe("string");
    expect(typeof tuple_1[1]).toBe("string");
    expect(tuple_1[0]).toBe("animated");
    expect(tuple_1[1]).toBe("fadeInRight");
  });

  it("test 2", () => {
    const tuple_2 = Animations.getAnimation();
    expect(tuple_2.length).toBe(2);
    expect(typeof tuple_2[0]).toBe("string");
    expect(typeof tuple_2[1]).toBe("string");
    expect(tuple_2[0]).toBe("animated");
    expect(tuple_2[1]).toBe("fadeInUp");
  });

  it("test 3", () => {
    const tuple_3 = Animations.getAnimation();
    expect(tuple_3.length).toBe(2);
    expect(typeof tuple_3[0]).toBe("string");
    expect(typeof tuple_3[1]).toBe("string");
    expect(tuple_3[0]).toBe("animated");
    expect(tuple_3[1]).toBe("fadeInLeft");
  });
});
