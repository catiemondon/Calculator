#!/usr/bin/env node

//to use command line tool, run the following command `npm i -g ./`
const calculator = require('commander');

const version = "0.0.1";

calculator
    .version(`${version}`)
    .command('add <num1> <num2>', 'adds two numbers together')
    .command('subtract <num1> <num2>', 'subtracts a number from another')
    .command('multiply <num1> <num2>', 'multiplies one number by another')
    .command('divide <num1> <num2>', 'divides one number by another')
    .command('plugin <num1> <operator> <num2>', 'uses two numbers and a custom operator to return total')
    .parse(process.argv)