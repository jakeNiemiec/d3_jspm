
import {scaleLinear} from "d3-scale";

console.log("scaleLinear:",scaleLinear);
var x = scaleLinear()
	.domain([10, 130])
	.range([0, 960]);

console.log(x(20)); // 80
console.log(x(50)); // 320
