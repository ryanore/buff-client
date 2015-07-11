# BUFF - bootstrapped user feedback forms
Webpack Build setup started with 
@mikechau https://github.com/mikechau/react-webpack-es6-boilerplate

## commands

```
Lifecycle scripts included in react-webpack-es6-boilerplate:
  test
    npm run karma

available via `npm run-script`:
  assets:build:form
  assets:build:bootstrap
  assets:serve:form
  assets:serve:bootstrap
  server:dev:form
  server:dev:bootstrap

  packages:purge
    rm -rf node_modules
  packages:reinstall
    npm run packages:purge && npm install
  packages:updates
    npm-check-updates
  packages:upgrade
    npm-check-updates -u
  server:dev
    NODE_ENV=development node ./dev.server.js
  shrinkwrap:build
    npm-shrinkwrap --dev
  shrinkwrap:remove
    rm npm-shrinkwrap.json
  shrinkwrap:rebuild
    npm run shrinkwrap:remove && npm run package:reinstall && npm run shrinkwrap:build
  spec
    mocha ./test/**/*.spec.js --reporter spec --timeout 15000 --bail --require ./test/_lib/bootstrap.js
  spec:watch
    mocha ./test/**/*.spec.js --reporter spec -w --timeout 15000 --bail --require ./test/_lib/bootstrap.js
  spec:watch:browser
    mocha ./test/**/*.spec.js --reporter spec -w --timeout 15000 2>&1 --bail --require ./test/_lib/bootstrap.js | report-viewer
  karma
    karma start
  karma:watch
    karma start --auto-watch --no-single-run
```

## development
- `npm run assets:build:form` -  Full build for export but index.html will only include the form script.

- `npm run assets:build:bootstrap` - Full build for export but index.html will only include the bootstrapping script.

- `npm run assets:serve:form` - Serves the assets with hot reloading from http://localhost:2992/assets/. 
Intended for running index.html from a different server.  Includes the form script only in the html file. Assets served from http://localhost:2992/assets/

- `npm run assets:serve:bootstrap` - Serves the assets with hot reloading from http://localhost:2992/assets/ . Intended for running index.html from a different server Includes only the bootstrap script in the html file.  
- `npm run server:dev:form` -  Full dev server with index from http://localhost:9999.  index.html loads the form script alone.

- `npm run server:dev:bootstrap` -  Full dev server with index from http://localhost:9999.  index.html loads the bootstrap script alone.




## testing

Support for running tests in **mocha** and via **karma**.

Update `test`, to run whatever test suite you prefer. By default it will run `karma`.

### mocha

Note: watching may not work properly due to `babel/register` being used as the transpilier in `bootstrap.js` and because of node caching `require`.

Looks for files ending with `*.spec.js`, bootstraped via `test/_lib/bootstrap.js` (sets up globals).

- `npm run spec` - run mocha tests
- `npm run spec:watch` - run mocha tests continuously, watches for updates
- `npm run spec:watch:browser` - run mocha tests continuously, watches for updates, with inbrowser reporter

### karma

Run the test by default inside `PhantomJS`, could be configured to also run in `Chrome` and `Firefox`.

- `npm run karma` - run karma
- `npm run karma:watch` - run karma continuously, watches for updates

## production

- `npm run assets:build` - build assets, also builds a `index.html` and `stats.json`.

## shrinkwrapping

You should update the `npm-shrinkwrap.json` file by running the `npm run shrinkwrap:build` command. Run it when adding new or updating packages in your `package.json`.

- `npm run shrinkwrap:build` - generate a `npm-shrinkwrap.json`.
- `npm run shrinkwrap:rebuild` - rebuilds the `npm-shrinkwrap.json`, after reinstalling `node_modules`.
- `npm run shrinkwrap:remove` - remove `npm-shrinkwrap.json`.
