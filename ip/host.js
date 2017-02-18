var spawn = require('child_process').spawn;

module.exports = {
	fromIp: function(ip){
		return new Promise(function(resolve, reject){
			var host = spawn('host', [ip]);

			var hosts = [];

			host.stdout.on('data', (data) => {
				(data+"").split("\n").map(function(line){
					return line.split(" pointer ");
				}).filter(function(line){
					return line[1] != undefined;
				}).map(function(line){
					return line[1];
				}).forEach(function(host){
					hosts.push(host);
				});
			});

			host.on('close', (code) => {
				if(code == 0){
					resolve(hosts);
				} else {
					resolve([]);
				}
			});
		});
	}
};

