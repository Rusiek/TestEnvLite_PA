#! /usr/bin/env node
const yargs = require("yargs")
const { GenContest } = require("./start/start.js")
const usage = ""

const options = yargs
    .usage(usage)
    .option("b",    {alias: "bruteforce",   describe: "Porównaj wyjście dwóch programów na losowych testach"})
    .option("f",    {alias: "filecheck",    describe: "Porównaj wyjście programu z plikami .out"})
    .option("c",    {alias: "compile",      describe: "Kompilacja programów cpp"})
    .option("s",    {alias: "start",        describe: "Generowanie katalogu contestowego"})

if (yargs.argv.h == true || yargs.argv.help == true)
{
    yargs.showHelp()
    return
}
else
{
    if (yargs.argv.s == true || yargs.argv.start == true)
    {
        GenContest()
    }
    else
    {
        if (yargs.argv.c == true || yargs.argv.compile == true)
        {

        }
        if (yargs.argv.f == true || yargs.argv.filecheck == true)
        {

        }
        else if (yargs.argv.b == true || yargs.argv.bruteforce == true)
        {

        }
    }
    
}