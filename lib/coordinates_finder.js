var opts; 
module.exports= {
	setOpts : function(opts){
		this.opts = opts;
	},
	findCoordinates : function(locationName, callback){
		var HttpsProxyAgent = require('https-proxy-agent');
	    var request = require('request');
			var agent;
			if(this.opts && this.opts.proxy){
	    	agent = new HttpsProxyAgent(this.opts.proxy);
			}
	   request({
	          uri: "https://restcountries.eu/rest/v1/name/"+locationName,
	          method: "GET",
	          headers: {
	          'content-type': 'application/x-www-form-urlencoded'
	          },
	          agent: agent,
	          timeout: 10000,
	          followRedirect: true,
	          maxRedirects: 10,
	          }, function(error, response) {
	          if(error){
	            console.log("Error " + error);
							return;	
						}
	          var resp = JSON.parse(response.body);
	          //console.log("Original resp: "+JSON.stringify(resp));
						 var locationObj ={};
						
						callback(resp[0]);
						
	      });
	}
}
