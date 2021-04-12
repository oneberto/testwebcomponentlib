import { p as promiseResolve, b as bootstrapLazy } from './index-2b46914f.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["pro-button",[[1,"pro-button",{"variant":[1],"size":[1],"disabled":[4]}]]]], options);
  });
};

export { defineCustomElements };
