import Quotes from "../../../utils/Quotes";

describe("Functions", () => {
  it("test 0", () => {
    const quote_0 = Quotes.getQuote();
    expect(typeof quote_0).toBe("object");
    expect(typeof quote_0.author).toBe("string");
    expect(typeof quote_0.author).toBe("string");
    expect(typeof quote_0.text).toBeTruthy();
    expect(typeof quote_0.text).toBeTruthy();
  });

  it("test 1", () => {
    const quote_1 = Quotes.getQuote();
    expect(typeof quote_1).toBe("object");
    expect(typeof quote_1.author).toBe("string");
    expect(typeof quote_1.author).toBe("string");
    expect(typeof quote_1.text).toBeTruthy();
    expect(typeof quote_1.text).toBeTruthy();
  });
});
