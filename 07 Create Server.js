const http = require('http');
// requests from fronted via url ?  and from node we send response  
http.createServer((request, response) => {
    response.write("<h1>we can send html tags inside a string a response</h1>")
    response.end();
}).listen(5500);