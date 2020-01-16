//Process Object

global.process

global.process.version
//current installed version

global.process.versions

process.cwd()
//current working directory

var user=function(greet){
  console.log(greet);
}

user('Welcome');

//Ouput will be Welcome

var user=function(greet){
  process.stdout.write(greet+'\n');
}

//Ouput will be Welcome




