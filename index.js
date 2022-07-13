import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

let sumando = suma(1,2);
console.log(chalk.green(sumando));

let multiplicando = multiplica(4,5);
console.log(chalk.green(multiplicando));
