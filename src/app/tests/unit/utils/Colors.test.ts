import Colors from "../../../utils/Colors";
import ColorNames from "../../../utils/ColorNames";

describe("Colors", () => {
  it("get 4 random colors, test their types and indexes", () => {
    const color_0 = Colors.getColor();
    const color_1 = Colors.getColor();
    const color_2 = Colors.getColor();
    const color_3 = Colors.getColor();

    expect(typeof color_0).toBe("string");
    expect(typeof color_1).toBe("string");
    expect(typeof color_2).toBe("string");
    expect(typeof color_3).toBe("string");

    expect(ColorNames.indexOf(color_0)).not.toBe(-1);
    expect(ColorNames.indexOf(color_1)).not.toBe(-1);
    expect(ColorNames.indexOf(color_2)).not.toBe(-1);
    expect(ColorNames.indexOf(color_3)).not.toBe(-1);
  });
});
