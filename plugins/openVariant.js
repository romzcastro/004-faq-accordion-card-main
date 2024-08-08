const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
  addVariant("peer-open", ":merge(:merge(.peer).open ~ &)");
});

module.exports = openVariant;
