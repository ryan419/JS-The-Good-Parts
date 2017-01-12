/**
 * closure
 */

myobj = (function () {
	var value = 1;

	return {
		increase: function () {
			value += 1;
		},
		currentvalue: function () {
			return value;
		}
	};
}());

console.log(myobj.currentvalue());

myobj.increase();

console.log(myobj.currentvalue());

myobj.increase();

console.log(myobj.currentvalue());

/**
 * Regular expression
 */

var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)$/i;
var test = function (num) {
	console.log(parse_number.test(num));
};

test('1');