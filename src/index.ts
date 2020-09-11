import {ApplicationConfig} from '@loopback/core';
import {LoopbackServerlessBackend} from './application';

export {LoopbackServerlessBackend};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackServerlessBackend(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
