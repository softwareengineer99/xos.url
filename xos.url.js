var qs=require('qs')
function URL(url){
	this.url=url;
	this.parts = ['source', 'protocol', 'authority', 'credentials', 'username', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query_string', 'anchor'];
	this.regexp=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	this.re = new RegExp(this.regexp);	
	this.parse = function(){
		this._parsed = this.url.match(this.re);
		this.parsed={}
		for (var index in this.parts){
			var key = this.parts[index]
			var value = this._parsed[index];
			this.parsed[key]=value
		}
		// var kvpairs=this.parsed.query.split('&');
		// qso = {}
		// for (var index in kvpairs){
		// 	var cursor = kvpairs[index];
		// 	var split = cursor.split('=');
		// 	var key = split[0];
		// 	var value = split[1];
		// 	qso[key]=value
		// }
		//this.parsed.qso=qso
		this.parsed.query = qs.parse(this.parsed.query_string)
		return this.parsed
	}
	this.parsed=this.parse()
}
module.exports=URL