var fs = require("fs");

fs.writeFileSync("jscore.js", [
	"polyfill.js",
	"license.js",
	"core.js",
	"function.js",
	"event_target.js",
	"object.js",
	"node.js",
	"element.js",
	"list.js",
	"node_list.js",
	"element_list.js",
	"eof.js"
].reduce(function (result, fileName) {
	return result + fs.readFileSync("src/" + fileName, "utf8");
}, ""), "utf8");