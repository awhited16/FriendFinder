

module.export = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/"));
    });

    app.get("default", function(req, res) {
        res.sendFile(path.join(_direname, "../public/home"));
    });
};

// Create our server
// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {

//     var requestPath = req.url;
  
//     switch (requestPath) {
  
//       case "/survey":
//         return fs.readFile(__dirname + "../public/survey.html", function(err, data) {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(data);
//         });
  
//       default:
//           return fs.readFile(__dirname + "../public/home.html", function(err, data) {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//           });
//     }
//   }
