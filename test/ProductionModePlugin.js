"use strict";

const expect = require("chai").expect;
const ReactGlobalizePlugin = require("../index");
const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");

const webpackConfig = {
  entry: {
    app: path.join(__dirname, "fixtures/app")
  },
  output: {
    path: path.join(__dirname, "../_test-output"),
    filename: "app.js"
  },
  plugins: [
    new ReactGlobalizePlugin({
      production: true,
      developmentLocale: "en",
      supportedLocales: ["en", "es"],
      messages: path.join(__dirname, "fixtures/translations/[locale].json"),
      output: "[locale].js"
    })
  ]
};

const promisefiedWebpack = () => new Promise((resolve, reject) => {
  webpack(webpackConfig, (error, stats) => {
    if (error) {
      return reject(error);
    }
    return resolve(stats);
  });
});

describe("ProductionModePlugin", () => {
  it("runs tests", () => {
    return promisefiedWebpack()
      .then((stats) => {
        // console.log(stats);
        expect(true).to.equal(true);
      });
  });
});
