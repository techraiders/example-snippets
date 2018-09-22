var trueTypeOf = function (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// Returns "array"
trueTypeOf([]);

// Returns "date"
trueTypeOf(new Date());
