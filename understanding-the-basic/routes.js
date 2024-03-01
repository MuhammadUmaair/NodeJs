const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(parseBody);
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end("Error occurred while writing to file");
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
    return;
  }
};

// when you export one things
// module.exports = requestHandler;

// when you export many things
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

//another way to export multiple things
// module.exports.handler = requestHandler;
// module.exports.someText = "Some text here";

//another shortcut way to export multiple things
exports.handler = requestHandler;
exports.someText = "Some text here";
