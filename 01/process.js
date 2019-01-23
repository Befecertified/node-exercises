//process object === console.log(process.argv);
function grab(flag) {
  var index = process.argv.indexOf(flag);
  var pos = process.argv[index + 1];

  return index === -1 ? null : pos;
}

var user = grab("--user");
var saying = grab("--saying");

if (!user || !saying) {
  console.log("You failed!!!");
} else {
  console.log(`${user} says ${saying}`);
}
