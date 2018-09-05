import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

function requestHandler(req,res) {

  let reqResource = path.join(
    __dirname,
    '..public',
    url.parse(req.url).pathname
  );

}
