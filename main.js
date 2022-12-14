//4---------------------------------
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
// });

// server.listen(8000);
//5----------------------------------

// const logger = require("./logger");
// const { greeting } = require("./logger");

// logger.sayHi("ali");
// greeting("ali");

// const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));

//-----------------------------------------------------
// console.log(process.title); // powershell or npm or..
// console.log(process.pid); // 1324 ...
// console.log(process.arch); //architecture x64
// console.log(process.version); // node version
// console.log(process.platform); //win 32
// console.log(process.env); //environment variables like MOGO_URI
// console.log(process.env.NODE_ENV); // future...(production/develop)
// console.log(process.exit()); //close application code 0 to 12
// //0 == while event loop is empty
// //1 == while error
// console.log(process.kill(type p id)); //kill process
// process.on; //events
// process.on('beforeExit',(code)=>console.log('exit code is'+ code)); // example of event
// // events are async
// //---
// console.log(process.argv); // flags
// console.log(process.cwd()); // location

//---------------------------------------------------------------

const fs = require("fs");
//fs  orginally is async

fs.writeFile("test.txt", "helllo this is data", (err) => {
  if (err) throw err;
  console.log("data saved");
});
//file name , data , (add option), callback func(runs after everything)

fs.appendFile("test.txt", " \n bye everyone", (err) => {
  if (err) throw err;
  console.log("data added");
}); //append data to file

// fs.writeFileSync().......
// sync no need callback
//and run line by line

fs.rename("test.txt", "greeting.txt", (err) => {
  if (err) throw err;
  console.log("file name changed");
});

fs.unlink("greeting.txt", (err) => {
  if (err) throw err;
  console.log("file deleted");
}); // delete file

const os = require("os");

console.log(os.platform()); //win 32
console.log(os.arch()); // x64
console.log(os.userInfo());
//{
//  uid: -1,
//  gid: -1,
//  username: 'Hassan',
//  homedir: 'C:\\Users\\Hassan',
//  shell: null
//}

console.log(os.release()); //10.0.4849
console.log(os.hostname()); //DESKTOP-P4PKUPT
console.log(os.uptime()); //32584 mil sec system is on
