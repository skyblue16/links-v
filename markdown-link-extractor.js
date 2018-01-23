/*
module.exports = function markdownLinkExtractor(markdown) {
  
let links = [];

class Link {
	constructor(href, text) {
		this.href = href;
		this.text = text;
	}
}
*/

let markdown = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const reTxt = /\[(.*?)\]/gi;
let linkText = markdown.match(reTxt);

const urlRegEx = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
let url = markdown.match(urlRegEx);

console.log(url);
console.log(linkText);

/*const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
let matches = markdown.match(re);

for (let i = 0; i < matches.length; i + 2) {
	for (let j = 1; j < matches.length; j + 2) {
		var one = new Link(matches[j],matches[i]);
	}
}*/

/*console.log(links);*/
    
  //return links;

