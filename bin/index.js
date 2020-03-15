#!/usr/bin/env node -r esm
import * as fs from 'fs';
import * as path from 'path';
import { parseChangelog, LINE_START_FOR_TODO } from '../src/parse-changelog.js';

const WORKING_DIR = process.cwd();
const FILE_NAME = process.argv[2] || './CHANGELOG.md';
const CHANGELOG_FILENAME = path.join(WORKING_DIR, FILE_NAME);
if (!fs.existsSync(CHANGELOG_FILENAME)) {
  console.log(`Could NOT find file "${FILE_NAME}" in ${WORKING_DIR}.`);
  process.exit(-1);
}

const changelog = fs.readFileSync(CHANGELOG_FILENAME, 'utf-8');
const {version, items: notYetDone} = parseChangelog(changelog);

if (notYetDone.length === 0) {
  process.exit(0);
}
console.log(`+----------------------   Version ${version}   ----------------------`);
console.log(`+-------  You have stuff to do. NOT ready to release yet!  -----`);
console.log(`|`);
console.log(`|  ${notYetDone.length} items marked as TODO (in version ${version})`);
console.log(`|    ${LINE_START_FOR_TODO} ${notYetDone.join(`\n|    ${LINE_START_FOR_TODO} `)}`);
console.log(`|`);
console.log('+---------------------- Get it done, first! ---------------------\n');

process.exit(-1);
