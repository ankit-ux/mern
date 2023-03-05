const http = require("http");
var fs = require('fs');

const host = '0.0.0.0';
const port = 8080;

const requestListener = function (req, res) {

  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
};





const server = http.createServer(requestListener);
server.listen(port, host, () => {

    console.log(`Server is running on http://${host}:${port}`);
});


