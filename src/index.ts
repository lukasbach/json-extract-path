#!/usr/bin/env node
import { program } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import jp from 'jsonpath';

interface Options {
  file: string;
  jsonpath: string;
  delemitter: string;
}

program
  .version(JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), { encoding: 'utf-8' })).version)
  .requiredOption('-f, --file <file>', 'path to the JSON file')
  .requiredOption('-j, --jsonpath <path>', 'JsonPath value')
  .option('-d, --delemitter <del>', 'delemitter character, in case more than one result is returned', ';');

program.parse(process.argv);

const options = program.opts() as Options;

(async () => {
  const uri = path.join(process.cwd(), options.file);
  let file: string;
  let json: any;
  let value: any[];

  try {
    file = await fs.promises.readFile(uri, { encoding: 'utf-8' });
  } catch (e) {
    console.error(`Could not read file ${uri}`);
    console.log(e);
    process.exit(1);
  }

  try {
    json = JSON.parse(file);
  } catch (e) {
    console.error(`Could not parse JSON.`);
    console.log(e);
    process.exit(1);
  }

  try {
    value = jp.query(json, options.jsonpath);
  } catch (e) {
    console.error(`Could not query JSONPath.`);
    console.log(e);
    process.exit(1);
  }

  console.log(value.join(options.delemitter));
})();
