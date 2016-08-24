//d3-scale
import {scaleLinear} from "d3-scale";

console.log("scaleLinear:",scaleLinear);
var x = scaleLinear()
	.domain([10, 130])
	.range([0, 960]);

console.log(x(20)); // 80
console.log(x(50)); // 320


//d3-selection-multi
import 'd3-selection-multi';
import {select} from "d3-selection";

//test d3-selection-multi
select("body").append("h1")
.text("d3-selection-multi works if this is big")
.styles({
	"text-align": "center",
	"line-height": "320px",
	"font-size": "100px"
}).attrs({
	title: "attrs test",
	class: "attrstestclass"
});

select("body").append("div")
.attrs({
	title: "A cheery, timeless greeting.",
	class: "greeting"
})
.text("Hello, world!");