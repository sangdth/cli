#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import ora from 'ora';
import yargs from 'yargs';
import { exec } from 'child_process';
import { wait, red } from './helpers';

const spinner = ora('Loading...').start();

const home = process.env.HOME;
const configDir = process.env.XDG_CONFIG_HOME;
const yourProjectConfigDir = path.resolve(configDir ?? `${home}/.config`, 'your-project/');

if (!fs.existsSync(yourProjectConfigDir)) {
  fs.mkdir(yourProjectConfigDir, { recursive: true }, () => {
    spinner.succeed('Created config folder at ~/.config/your-project');
  });
}

yargs(process.argv.slice(2))
  .config({})
  .command(
    'dev',
    'Run development command',
    (y) => y,
    async () => {
      spinner.text = 'Start running dev server...';
      await wait(1000);

      exec('echo "Your project run..."', (error) => {
        if (error) {
          spinner.fail(red(`${red('Error')}: ${error}`));

          return;
        }

        spinner.succeed('Ran successfully!');
      });
    },
  )
  .command(
    'down',
    'Shut down development command',
    (y) => y,
    async () => {
      spinner.text = 'Stopping dev server...';

      exec('echo "Everything gone!"', () => {
        spinner.succeed('Bye bye!');
      });
    },
  )
  .parse();
