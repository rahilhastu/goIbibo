var request = require("request");
var source  = 'BLR';
var destination = 'DEL';
var dateOfDeparture  = '20171018';
var dTime ;
var Price;
var FlightName;
var q = "http://developer.goibibo.com/api/search/?app_id=c43740eb&app_key=4dbe6b6c4405d72ad770d08a5c52bd9d&format=json&source="+source+"&destination="+destination+"&dateofdeparture="+dateOfDeparture+"&seatingclass=B&adults=1&children=0&infants=0&counter=100";
 request(q, function(err, res, data){
// 	if(err){
 //		throw err;
 //	}
 	data = JSON.parse(data);
 	data = data.data.onwardflights;

// 	console.log(data.length);

 	for(var i in data){
 		// console.log(data[i]);
 		if(data[i].destination == destination){

 			if (data[i]. airline == "Vistara"){
 				dTime = data[i].deptime;
 				Price = data[i].fare.adulttotalfare;
 				FlightName = data[i].FlHash;
 				console.log(data[i],FlightName,dTime,Price);
 			}
 		}
 	}
 });

// getDayNumber = function(stringDay){
// 	var d = [];
// 	d["sun"] = 0;
// 	d["mon"] = 1;
// 	d["tue"] = 2;
// 	d["wed"] = 3;
// 	d["thu"] = 4;
// 	d["fri"] = 5;
// 	d["sat"] = 6;

// 	return d[stringDay];
// }

// nextDay = function(day){
// 	var x = Date.now();
// 	for(var i=0; i<7; i++){
// 		d = new Date(x);
// 		if(d.getDay() == getDayNumber(day)){
// 			console.log("Found");
// 			break;
// 		}else{
// 			x+=86400000;
// 		}
// 	}
// }
// var x = Date.now();
// console.log(x);
// var d;


// console.log(d);

// console.log(d.getDate());