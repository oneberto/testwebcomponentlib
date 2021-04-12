import { p as promiseResolve, b as bootstrapLazy } from './index-2b46914f.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["pro-button",[[1,"pro-button",{"variant":[1],"size":[1],"disabled":[4]}]]]], options);
});
