import commandLineArgs from 'command-line-args';
import * as TJS from 'typescript-json-schema';
import { resolve, join } from 'path';
import {
  lstatSync,
  readdirSync,
  existsSync,
  writeFileSync,
  mkdirpSync,
  removeSync,
  copyFileSync
} from 'fs-extra';
import { pascalCase, paramCase, camelCase } from 'change-case';

const optionDefinitions:Array<commandLineArgs.OptionDefinition> = [
  { name: 'make', alias: 'm', type: Boolean},
  { name: 'copy', alias: 'c', type: Boolean }
]

const options:commandLineArgs.CommandLineOptions = commandLineArgs(optionDefinitions);

const PIE_DEFINITIONS_DIR = 'src/pie';
const OUT_DIR = join('dist', 'schemas');
const PIE_SCHEMA_FILENAME = 'pie-schema.json';
const CONFIG_SCHEMA_FILENAME = 'config-schema.json';

const SETTINGS: TJS.PartialArgs = {
  required: true
};



const getDirectories = (p: any) =>
  readdirSync(p).filter(f => lstatSync(join(p, f)).isDirectory());

const writeSchemaForPie = (packageName: string, filePath: string) => {
  const typePrefix = pascalCase(packageName);
  const packageOutDir = join(OUT_DIR, packageName);
  mkdirpSync(packageOutDir);

  console.log(`generated ${packageOutDir}`);

  // load schemas
  const program = TJS.getProgramFromFiles([filePath]);
  const generator = TJS.buildGenerator(program, SETTINGS);

  if (generator) {
    // write config model
    try {
      const configSchema = generator.getSchemaForSymbol(
        typePrefix + 'Configure'
      );
      writeFileSync(
        join(packageOutDir, CONFIG_SCHEMA_FILENAME),
        JSON.stringify(configSchema, null, 2)
      );
    } catch (error) {
      console.log(`no config available for ${packageName}`);
    }
    try {
      const pieSchema = generator.getSchemaForSymbol(typePrefix + 'Pie');
      writeFileSync(
        join(packageOutDir, PIE_SCHEMA_FILENAME),
        JSON.stringify(pieSchema, null, 2)
      );
    } catch (error) {
      console.log(`no pie model available for ${packageName}`);
    }
  } else {
    console.error(`could not load schema files for ${packageName}`);
  }
};



if (options.make || options.copy) {  
  

  const dirs = getDirectories(PIE_DEFINITIONS_DIR);

  if (options.make) {
    removeSync('dist');
    mkdirpSync(OUT_DIR);
    dirs.forEach(dir => {
      const modelFile = resolve(PIE_DEFINITIONS_DIR, dir, 'index.ts');
      if (existsSync(modelFile)) {
        writeSchemaForPie(dir, modelFile);
      }
    });
  }

  if (options.copy) {
    console.log('copy schemas from dist - needs to be run in context of pie-elements repository');
    dirs.forEach(dir => {
      const pieDocsDir = resolve('../', dir, 'docs');
      if (existsSync(pieDocsDir)) {
        console.log('write schemas to ' + pieDocsDir);
        const configSchemaFile = resolve(OUT_DIR, dir, CONFIG_SCHEMA_FILENAME);
        const pieSchemaFile = resolve(OUT_DIR, dir, PIE_SCHEMA_FILENAME);
        existsSync(configSchemaFile) && copyFileSync(configSchemaFile, resolve(pieDocsDir, CONFIG_SCHEMA_FILENAME));
        existsSync(pieSchemaFile) && copyFileSync(pieSchemaFile, resolve(pieDocsDir, PIE_SCHEMA_FILENAME));
      }
    });

  }
} else {
  console.log('no options passed');
}