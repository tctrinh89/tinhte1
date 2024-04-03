const { override, useBabelRc } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc({
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
        },
      ],
    ],
  })
);
