/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
/* eslint-enable @typescript-eslint/no-var-requires */

const mode = process.env.ENV;
const port = process.env.PORT;

const config = (mode === 'development')
  ? require('./webpack.config-dev')
  : require('./webpack.config-build');

const server = express();
const compiler = webpack(config);

const { log, error } = console;

fs.remove(config.output.path)
  .then(() => {
    log('MODE', mode);

    // Enable HMR
    if (mode === 'development') {
      const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: '/assets/',
      });
      devMiddleware.waitUntilValid(() => {
        log(`\n\x1B[0m\x1B[32m\x1B[1m ✔️ Check your browser : http://localhost:${port} \x1B[0m\n`);
      });
      server.use(devMiddleware);

      server.use(webpackHotMiddleware(compiler, {
        path: '/__webpack_hmr',
        heartbeat: 2000,
      }));
    }

    // Launch a webpack compilation
    if (mode === 'production') {
      compiler.run((err, stats) => { // [Stats Object](#stats-object)
      // ...
        if (stats.hasErrors()) {
          error(stats.toString(), '\nCompilation failed.');
        }
        log(stats.toString(), '\nSuccesfully compiled.');

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        compiler.close(() => {
        });
      });
    }

    // Serves all static assets.
    server.use(express.static(path.resolve(config.output.path, '..')));

    // Catch-all to redirect any request to the main entry point (index.html).
    server.get('*', (_request, response, next) => {
      const filePath = path.resolve('./dist/', 'index.html');
      compiler.outputFileSystem.readFile(filePath, (err, content) => {
        if (err !== null) {
          next(err);
        } else {
          response.set('content-type', 'text/html');
          response.send(content);
          response.end();
        }
      });
    });

    server.listen(port, () => {
      log(`Server is up, waiting for compilation. Port: ${port}`);
    });
  })
  .catch((err) => {
    error('Compilation failed :');
    error(err.message);
  });
