const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins,
  addBundleVisualizer
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins("ramda"),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1890ff" }
  }),
  addBundleVisualizer({}, true)
);
