//to find local file
// const http = require('./http.js');
//core model for request
const http = require("http");
//another core model require fileSystem
const fs = require("fs");

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
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>'
    );
    res.write('</html>');
    return res.end(); //to end function execution
  }

  //   to make sure the method will be POST `method === 'POST'`;
  if (url === 'message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    // 302 for Redirection
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end(); //to end function execution
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);