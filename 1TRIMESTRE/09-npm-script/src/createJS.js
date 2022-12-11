var args = process.argv.slice(2);
var filename = args[0];
process.chdir("files");
fs.writeFileSync(filename + ".js");