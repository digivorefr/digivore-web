import {
  AliasOptions,
  defineConfig, loadEnv, UserConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';
import fs from 'fs';
import autoprefixer from 'autoprefixer';
import tsConfigPaths from 'vite-plugin-tsconfig-paths';

require.resolve('react/jsx-dev-runtime');

const envPrefix = ['FE_'];

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');

const srcSubDirectories = fs.readdirSync(srcPath, { withFileTypes: true })
  .filter((fileOrDirectory) => fileOrDirectory.isDirectory())
  .map((directory) => directory.name);

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), envPrefix);
  // Options for Vite react plugin.
  const reactOptions = {
    // Only .tsx files
    include: '**/*.tsx',
  };
  // eslint-disable-next-line no-console
  console.warn('MODE', mode);
  return <UserConfig><unknown>{
    root: process.cwd(),
    envPrefix,
    publicDir: publicPath,
    mode,
    resolve: {
      alias: srcSubDirectories.reduce((aliases, directory) => ({
        ...aliases, [directory]: path.join(srcPath, directory),
      }), {} as AliasOptions),
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      // Fix to be able to build with 'development' env, and develop with 'production' env.
      // See https://github.com/vitejs/vite/issues/5885#issuecomment-1020082111
      ...((mode === 'production')
        ? [react(reactOptions)]
        : [
          react({ ...reactOptions, jsxRuntime: 'classic' }),
          checker({
            typescript: true,
            eslint: {
              lintCommand: 'eslint "src/**/*.{ts,tsx}"',
            },
          }),
        ]),
      tsConfigPaths(),
    ],
    build: {
      outDir: 'public/',
      sourcemap: mode === 'development',
      target: 'es6',
    },
    server: {
      host: env.FE_HOST,
      port: parseInt(env.FE_PORT, 10),
      https: false,
    },
  };
});
