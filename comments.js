//create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];
http.createServer(function(req, res){
	var urlObj = url.parse(req.url,true);
	var pathname = urlObj.pathname;
	if(pathname == '/'){
		var filepath = path.join(__dirname,'index.html');
		var fileContent = fs.readFileSync(filepath);
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(fileContent);
	}else if(pathname == '/comment'){
		var comment = urlObj.query;
		comments.push(comment);
		res.end(JSON.stringify(comments));
	}else{
		var filepath = path.join(__dirname,pathname);
		if(fs.existsSync(filepath)){
			var fileContent = fs.readFileSync(filepath);
			res.end(fileContent);
		}else{
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end('404 not found');
		}
	}
}).listen(8080);
console.log('server is listening 8080');