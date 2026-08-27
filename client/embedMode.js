function isEmbedMode(search) {
  return new URLSearchParams(search).get("embed") === "1";
}

module.exports = { isEmbedMode };
