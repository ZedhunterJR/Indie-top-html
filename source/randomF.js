// JavaScript source code
const rando = [
	"#skul",
	"#tinyrogue",
	"#dungreed",
	"#demoncrawl",
	"#shotgunking",
	"#vampiresurvivor",
	"#luckbealandlord",
	"#peglin",
	"#deadcell",
	"#babaisyou",
	"#polybridge",
	"#canofwormholes",
	"#patrickparabox",
	"#thewitness",
	"#cosmicexpress",
	"#inscryption",
	"#caseofthegoldenidol",
	"#thereisnogame",
	"#terranil",
	"#cardshark",
	"#backpackhero",
];
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function randomGame()
{
	let i = getRandomInt(rando.length);
	let tempLink = 'subPage.html' + rando[i];
	window.location.href = tempLink;
}