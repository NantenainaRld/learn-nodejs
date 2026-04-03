import http from "http";
import { readFile } from "fs";
import url from "url";
// *******************************
// // create the server object
// let server = http.createServer();

// // server request
// server.on("request", (req, res) => {
//   // =========================
//   //   console.log("There was a request");
//   //   res.end("Request response here, this will display in the navigator"); // this doesn't change without node refresh
//   //   =======================
//   //   =======================
//   //-- header
//   res.writeHead(200, {
//     "Content-Type": "text/html; charset=utf-8",
//   });
//   res.end("Hey there , request <b style='color:green'>202</b> OK");
// });

// server.listen(8080);
// *******************************

// METHOD 2
// *******************************
// http
//   .createServer((req, res) => {
//     console.log("There was a request");
//     res.writeHead(200, {
//       "Content-Type": "text/html; charset=utf-8",
//     });
//     res.end("<b style='color:green; font-size: 50px;'>202</b>");
//   })
//   .listen(8080);
// *******************************

// ============================
//-- Server with page
/* http
  .createServer((req, res) => {
    readFile("./index.html", "utf8", (err, data) => {
      //file not found
      if (err) {
        res.writeHead(404);
        res.end("404 - File not found");
      }

      // response ok
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      // query example : localhost:8080/?name=nantenaina
      data = data.replace("{{ name }}", url.parse(req.url, true).query.name);

      // return the html
      res.end(data);
    });
  })
  .listen(8080); */
//   ============================

// ==============================
//-- Event
import EventEmitter from "events";

let App = {
  start: (port) => {
    let emitter = new EventEmitter();

    http
      .createServer((req, res) => {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        if (req.url === "/") {
          emitter.emit("root", res);
        }
      })
      .listen(port);

    return emitter;
  },
};

let app = App.start(8080);
app.on("root", (res) => {
  res.write("I'm in root");
  res.end();
});
