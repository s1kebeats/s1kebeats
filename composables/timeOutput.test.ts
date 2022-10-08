import { describe, expect, it } from "vitest";

import { timeOutput } from "./timeOutput";

describe("timeOutput", () => {
  it("2m", () => {
    expect(timeOutput(120)).toBe("2:00");
  });
  it("3m 35s", () => {
    expect(timeOutput(215)).toBe("3:35");
  });
  it("1s", () => {
    expect(timeOutput(1)).toBe("0:01");
  });
  it("5m 10s", () => {
    expect(timeOutput(310)).toBe("5:10");
  });
  it("10m 10s", () => {
    expect(timeOutput(610)).toBe("10:10");
  });
});
