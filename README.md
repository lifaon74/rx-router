[![npm (scoped)](https://img.shields.io/npm/v/@lifaon/rx-router.svg)](https://www.npmjs.com/package/@lifaon/rx-router)
![npm](https://img.shields.io/npm/dm/@lifaon/rx-router.svg)
![NPM](https://img.shields.io/npm/l/@lifaon/rx-router.svg)
![npm type definitions](https://img.shields.io/npm/types/@lifaon/rx-router.svg)

## 🚝 rx-router

This is a router for [rx-dom](https://github.com/lifaon74/rx-dom).

**It is now in BETA. Please use with caution and provide feedback.**


## 📦 Installation

```bash
yarn add @lifaon/rx-router
# or
npm install @lifaon/rx-router --save
```

This library supports:

- **common-js** (require): transpiled as es5, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lifaon/rx-router](https://cdn.skypack.dev/@lifaon/rx-router)
