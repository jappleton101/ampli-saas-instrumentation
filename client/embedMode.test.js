const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { isEmbedMode } = require("./embedMode.js");

describe("isEmbedMode", () => {
  it("is true only when embed=1", () => {
    assert.equal(isEmbedMode("?embed=1"), true);
  });

  it("is false for parent and other queries", () => {
    assert.equal(isEmbedMode(""), false);
    assert.equal(isEmbedMode("?"), false);
    assert.equal(isEmbedMode("?embed=true"), false);
    assert.equal(isEmbedMode("?embed=0"), false);
    assert.equal(isEmbedMode("?foo=1"), false);
  });
});
