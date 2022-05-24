var sys = require("sys"),
	http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs");
	
http.createServer(function(request, response){
		var uri = url.parse(request, url).pathname;
		var filename = path.join(process.cwd(), uri);
		path.exists(filename, function(exists) {
			if(!exists) {
				response.writeHead(404, {"Content-type": "text/plain"});
				response.end("404 File Not Found\n");
				return;
				
				}		
				fs.readFile(filename, "binary", function(err, file) {
						if(err) {
							response.writeHead(500, {"Content-type": "text/plain"});
							response.end(err + "\n");
							return;
						}
						response.writeHead(200);
						response.end(file, "binary");
														 });
									   
									   });
									   }).listen(8080);
						   