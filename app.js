var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");
var eventproxy = require("eventproxy");
var mongodb = require("mongodb").MongoClient;
var mongoose = require("mongoose");
var db = mongoose.createConnection("mongodb://crazy875:123456@ds045107.mongolab.com:45107/mytest");
var app = express();

var userSchema = new mongoose.Schema({
  name:String
});

var userModel = db.model('users', userSchema);

app.get("/",function(req,res){
	// superagent.get('https://cnodejs.org')
	// .end(function(err,text){
	// 	if(err){
	// 		return next(err);
	// 	}

	// 	var $ = cheerio.load(text.text);
	// 	var items = [];
	// 	$('#topic_list .topic_title').each(function(idx,e){
	// 		var $e =$(e);
	// 		items.push({
	// 			title:$e.attr('title'),
	// 			href: $e.attr('href')
	// 		})
	// 		console.log(e);
	// 	})
	// 	res.send(items);
	// })
	 userModel.find({"name":"wamngdong"},function(err,result){
	    res.send(result);
	  })
})

app.listen(process.env.PORT || 5000);