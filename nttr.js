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
	'https://www.eff.org/',
	'https://www.ccc.de/en/',
	'https://www.laquadrature.net/en',
	'https://en.wikipedia.org/wiki/Special:Random',
	'https://www.wolframalpha.com/input/random.jsp',
	'https://www.wikihow.com/Special:Randomizer',
	'https://ask.metafilter.com/random',
	'https://www.urbandictionary.com/random.php',
	'https://answers.yahoo.com/answer',
	'https://randomstreetview.com/',
	'https://www.wikigifs.org/',
	'https://mirrors.meiert.org/coderesponsibly.org/',
	'https://www.google.com/search?q=' + randomString(randomNumber(1, 20)),
	'http://www.' + randomString(randomNumber(3, 10)) + '.com/'
];

chrome.tabs.update({
	url: urls[Math.floor(Math.random()*urls.length)],
	highlighted: true
});