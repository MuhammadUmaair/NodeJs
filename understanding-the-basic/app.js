// const http = require("./http.js"); //to find local file

const http = require("http"); //to find global file

// function reListner(req, res) {
//   function call when hit createServer
// }
// http.createServer(reListner);

// http.createServer(function (req, res) {
//anonymous function
// });

const server = http.createServer((req, res) => {
  //Arrow function
  //   console.log(req); // we received lots of data
  //   console.log(req.url); //if we need url
  //   console.log(req.method); //if we need methods
  //   console.log(req.headers); //if we need headers
  //   for return response we comment exit
  //process.exit(); // if exit after execute

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");

  res.write("</html>");
});
server.listen(3000);
