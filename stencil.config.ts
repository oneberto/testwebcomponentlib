import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
    namespace: "prodigio-components",
    outputTargets: [
        {
            type: "dist",
            esmLoaderPath: "../loader",
        },
        {
            type: "dist-custom-elements-bundle",
        },
        {
            type: "docs-readme",
        },
        {
            type: "www",
            serviceWorker: null, // disable service workers
        },
        reactOutputTarget({
            componentCorePackage: "prodigio-components-react",
            proxiesFile: "../prodigio-components-react/src/components.ts",
        }),
    ],
    plugins: [
        sass({
            injectGlobalPaths: ["src/global/normalize.scss"],
        }),
    ],
};
