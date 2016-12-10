// Generate random number
function randomNumber(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

// Generate random string
function randomString(length) {
	var chars = 'abcdefghijklmnopqrstuvwxyz';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

// Open random URL
var urls = [
	'https://www.ccc.de/en/',
	'https://coderesponsibly.org/',
	'https://www.eff.org/',
	'https://www.laquadrature.net/en',
	'https://cdn.rawgit.com/yozlet/randomrandom/master/randomrandom.html',
	'https://en.wikipedia.org/wiki/Special:Random',
	'http://www.' + randomString(randomNumber(3, 10)) + '.com/'
];

chrome.tabs.update({
	url: urls[Math.floor(Math.random()*urls.length)],
	highlighted: true
});