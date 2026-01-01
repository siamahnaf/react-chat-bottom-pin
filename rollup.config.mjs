import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                entryFileNames: "cjs/index.js",
                chunkFileNames: "cjs/chunks/[name]-[hash].js",
                assetFileNames: "cjs/assets/[name]-[hash][extname]",
            },
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                entryFileNames: "esm/index.js",
                chunkFileNames: "esm/chunks/[name]-[hash].js",
                assetFileNames: "esm/assets/[name]-[hash][extname]",
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({ extract: true }),
            terser(),
        ],
        external: ["react", "react-dom"],
    },

    {
        input: "dist/esm/types/index.d.ts",
        output: { file: "dist/index.d.ts", format: "esm" },
        plugins: [dts()],
        external: [/\.css$/],
    },
];
