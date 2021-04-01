import { checkCardNaive } from "../../utils/creditCardCheck";
import {
  unknownCardExample,
  visaExample,
  discoverCardExample,
  masterCardExample,
  americanExpressExample,
  visaElectronExamplePrefixLength4,
  visaElectronExamplePrefixLength6,
} from "../../constants";

describe("checking credit card check", () => {
  it("should return unknown for fake card number", () => {
    expect(checkCardNaive(unknownCardExample)).toBe("UNKNOWN");
  });
  it("should return key for visa", () => {
    expect(checkCardNaive(visaExample)).toBe("VISA");
  });
  it("should return key for visa electron with the 4130 prefix", () => {
    expect(checkCardNaive(visaElectronExamplePrefixLength4)).toBe(
      "VISA_ELECTRON"
    );
  });
  it("should return key for visa electron with the 403677 prefix", () => {
    expect(checkCardNaive(visaElectronExamplePrefixLength6)).toBe(
      "VISA_ELECTRON"
    );
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
