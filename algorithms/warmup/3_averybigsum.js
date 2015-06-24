#!/usr/bin/env node


function processData(input) {
    //Enter your code here
   	input_lines = input.split("\n");
   	n = parseInt(input_lines[0])
   	num_array = input_lines[1].split(" ")
   	var total = 0
   	for (var i =0; i<n;i++){
   		total = total+parseInt(num_array[i])
   	}
   	console.log(total)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
