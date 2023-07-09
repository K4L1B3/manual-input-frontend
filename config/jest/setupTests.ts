import "@testing-library/jest-dom/extend-expect";

window.matchMedia = (query) => ({
  addEventListener: jest.fn(),
  addListener: jest.fn(),
  dispatchEvent: jest.fn(),
  matches: false,
  media: query,
  onchange: null,
  removeEventListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  value: jest.fn(),
  writable: true,
});
