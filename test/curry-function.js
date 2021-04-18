import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module", plugins: ["jsx"] });
}

console.log(
  getParser(`{} <html><title>{{hello}}</title></html>`)().program.body,
);

describe("curry function syntax", function () {
  it("should parse", function () {
    expect(getParser(`{{ const a =2; }}`)()).toMatchSnapshot();
  });
});
