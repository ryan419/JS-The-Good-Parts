Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
}

var eventuality  = function (that) {
	var registry = {};

	that.fire = function (event) {
		var array, func, handler, i, type = typeof event === 'string' ? event : event.type;
	}
}