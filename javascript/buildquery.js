// Build a query string from an object of data.

/*!
 * Build a query string from an object of data
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
var buildQuery = function (data) {
	if (typeof (data) === 'string') return data;
	var query = [];
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
		}
	}
	return query.join('&');
};

var endpoint = 'https://api.petfinder.com/shelter.getPets';
var query = buildQuery({
	format: 'json',
	key: '1234my_key_would_go_here_5678',
	count: 25,
	id: 'ABC99'
});
var callURL = endpoint + '?' + query;

// logs "https://api.petfinder.com/shelter.getPets?format=json&key=1234my_key_would_go_here_5678&count=25&id=ABC99"
console.log(callURL);