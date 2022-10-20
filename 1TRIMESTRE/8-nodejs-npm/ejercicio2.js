import chalk from 'chalk';
import { faker } from '@faker-js/faker'
let name = faker.name.findName();
let color = faker.color.rgb();
console.log(chalk.hex(color)(name));