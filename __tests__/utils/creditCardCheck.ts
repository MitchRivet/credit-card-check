import { checkCardNaive } from "../../utils/creditCardCheck";
import {
  unknownCardExample,
  visaExample,
  discoverCardExample,
  masterCardExample,
  americanExpressExample,
} from "../../constants";

describe("checking credit card check", () => {
  it("should return unknown for fake card number", () => {
    expect(checkCardNaive(unknownCardExample)).toBe("UNKNOWN");
  });
  it("should return key for visa", () => {
    expect(checkCardNaive(visaExample)).toBe("VISA");
  });
  it("should return unknown for fake card number", () => {
    expect(checkCardNaive(discoverCardExample)).toBe("DISCOVER");
  });
  it("should return unknown for fake card number", () => {
    expect(checkCardNaive(americanExpressExample)).toBe("AMERICAN_EXPRESS");
  });
  it("should return unknown for fake card number", () => {
    expect(checkCardNaive(masterCardExample)).toBe("MASTER_CARD");
  });
});
