# React + Vite

This template provides a minimal setup to get React working in Vite with HMR.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Add import `path` in `vite.config.js`
````
import path from 'path';
````
Add `resolve` within the `defineConfig` function alias path.
````
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src/')
  }
}
````

The code provided is from a file called `jsconfig.json`. This file is commonly used in JavaScript projects
Create `jsconfig.json` in the root directory. In this case, there are two options specified

Using `baseUrl` and  `paths` in `CompilerOptions` it's allows to use of custom paths to easy.

````
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
````



Tutorial URL: https://youtu.be/JPlVb3t6kx8

For figma file:
    - Open the figma and upload the given fig file directly into the file explorer

External Libraries used in this project: 

    - https://tailwindcss.com/
    - https://recharts.org/en-US/


- Fonts from https://fonts.google.com/ <br />
- Icons from https://iconify.design/ <br />
- API from https://www.coingecko.com/en/api <br />   


Special Thanks to coingecko(https://www.coingecko.com) for providing such api. 

Credit : https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA
Starter Code Files: https://github.com/codebucks27/CryptoBucks-A-crypto-screener-application
