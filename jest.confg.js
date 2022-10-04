module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: [
    "<rootDir>/pages",
    "<rootDir>/components"

],

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],

    testEnvironment: 'jsdom',
  };