import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/products";

describe("no prices anywhere on the site", () => {
  it("has no price field on any product", () => expect(PRODUCTS.some(p => "cataloguePrice" in p && p.cataloguePrice !== undefined)).toBe(false));
  it("shows all six finishes without price grouping", () => expect(PRODUCTS.map(p => p.name)).toEqual(["Marbaleno", "Masken", "Shaneel", "Beatriz", "Sandito", "Liquid Wallpaper"]));
  it("does not include discontinued catalogue items", () => expect(PRODUCTS.map(p => p.name)).not.toEqual(expect.arrayContaining(["Velvetto", "Pearl", "Travertino", "Marmarino", "Palace"])));
});
