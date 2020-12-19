# Install
**@types/react**
`$ npm install @types/react --save-dev`

**@types/react-dom**
`$ npm i --save-dev @types/react-dom`


# Errors
**Create file tsconfig.json**
> Run command:
`$ tsc --init`

**Cannot use JSX unless the '--jsx' flag is provided**
> Add `"jsx": "react"` to file tsconfig.json
```json
{
  "compilerOptions": {
    "jsx": "react",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
  }
}
```

**DevTools failed to load SourceMap: Could not load content for http://localhost:3008/js/popper.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE**
> Add `"inlineSourceMap": true` to file tsconfig.json



# Configuration of project using Laravel + React Typescript
**package.json**
```json
{
    "private": true,
    "scripts": {
        "dev": "npm run development",
        "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch": "npm run development -- --watch",
        "watch-poll": "npm run watch -- --watch-poll",
        "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --disable-host-check --config=node_modules/laravel-mix/setup/webpack.config.js",
        "prod": "npm run production",
        "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --config=node_modules/laravel-mix/setup/webpack.config.js"
    },
    "devDependencies": {
        "@types/react": "^17.0.0",
        "@types/react-dom": "^17.0.0",
        "axios": "^0.19",
        "bootstrap": "^4.0.0",
        "browser-sync": "^2.26.13",
        "browser-sync-webpack-plugin": "^2.0.1",
        "cross-env": "^7.0",
        "jquery": "^3.2",
        "laravel-mix": "^4.1.4",
        "lodash": "^4.17.19",
        "popper.js": "^1.12",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "resolve-url-loader": "^3.1.0",
        "sass": "^1.15.2",
        "sass-loader": "^7.0.0",
        "ts-loader": "^8.0.12",
        "typescript": "^4.1.3"
    },
    "dependencies": {
        "@babel/preset-typescript": "^7.12.7"
    }
}

```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "es5", 
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "inlineSourceMap": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

```