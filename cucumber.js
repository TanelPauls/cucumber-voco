module.exports = {
  default: {
    require: ["features/steps/*.js", "support/world.js"],
    format: ["progress"],
    publishQuiet: true
  }
};