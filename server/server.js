import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

function requestHandler(req,res) {

  let reqResource = path.join(
    __dirname,
    '../public',
    url.parse(req.url).pathname
  );

  fs.exists(reqResource, (exists) => {

    if(!exists){
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }

    if(fs.statSync(reqResource).isDirectory()){
      reqResource +='index.html';
    }

    fs.readFile(
      reqResource,
      "binary",
      function(err, file){

        if(err){
          res.writeHead(500, {"content-Type": "text/plain"});
          res.write(err + "\n");
          res.end();
          return;
        }

        const contentTypeByExtension = {
          ".html":  "text/html",
          ".css":   "text/css",
          ".js":    "text/javascript"
        };

        const headers = {};

        const contentType = contentTypeByExtension[
          path.extname(reqResource)
        ];

        if(contentType){
          headers["Content-Type"] = contentType;
        }

        res.writeHead(200, headers);
        res.write(file, "binary");
        res.end();

      });
    });

}

const server = http.createServer(requestHandler);
const portNumber = 3030;

server.listen(portNumber, function(){
  console.log(`Server is listening to ${portNumber}`);
})
