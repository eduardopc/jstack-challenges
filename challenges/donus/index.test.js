import { getBestCreditCompany } from ".";

describe("test", () => {
  it("test", () => {
    expect(getBestCreditCompany("Roberto Junior")).toBe("CreditClass");
    expect(getBestCreditCompany("José Carlos")).toBe("Crédito Legal");
    expect(getBestCreditCompany("Caio Rodrigues")).toBe("CreditClass");
    expect(getBestCreditCompany("Carlos Silva")).toBe("Mais Crédito");
  });
});
