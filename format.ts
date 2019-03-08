#!/usr/bin/env deno --allow-run --allow-write --allow-read
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
const { exit, args } = Deno;
import { parse } from "./flags/mod.ts";
import { xrun, executableSuffix } from "./prettier/util.ts";

async function main(opts) {
  const args = [
    `deno${executableSuffix}`,
    "--allow-write",
    "--allow-read",
    "prettier/main.ts",
    "--ignore",
    "node_modules",
    "--ignore",
    "testdata",
    "--ignore",
    "vendor"
  ];

  if (opts.check) {
    args.push("--check");
  }

  exit((await xrun({ args }).status()).code);
}

main(parse(args));
