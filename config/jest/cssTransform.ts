export default {
  getCacheKey(): string {
    return "cssTransform";
  },
  process(): string {
    return "module.exports = {};";
  },
};
