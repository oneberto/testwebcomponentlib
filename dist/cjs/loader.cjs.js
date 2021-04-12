'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71713531.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["pro-button.cjs",[[1,"pro-button",{"variant":[1],"size":[1],"disabled":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
