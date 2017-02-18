var request = require("request");
var _s = require("underscore.string");

module.exports = {
	getIp: function(){
		return new Promise(function(resolve, reject){
			request('https://ifconfig.co/ip', function (error, response, body) {
				if(!error && response.statusCode == 200){
					resolve(_s.trim(body));
				} else {
					reject(error);
				}
			});
		});
	}
}

