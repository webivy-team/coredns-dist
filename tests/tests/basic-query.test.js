import assert from "node:assert";
import test from "node:test";

import coredns from "coredns-dist"
import {Resolver} from 'node:dns/promises'

test("Basic query", async () => {
  const server = await coredns()
  const resolver = new Resolver();
  resolver.setServers(['127.0.0.1:1053']);
  assert((await resolver.resolve4('www.example.org'))[0] === '127.0.0.4')
  server.stop();
})
