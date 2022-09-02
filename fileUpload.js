var http = require("http");
var formidable = require("formidable");
const fs = require("fs");
const { MultipartParser } = require("formidable/parsers");

http.createServer((req, res) => {
    if(req.url == "/fileUpload.js") {

    } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write("<input type='file' name='filetoupload'>);
        res.write("<input type='submit'>");
        res.write("<form>");
    
    }
}).listen(8288);