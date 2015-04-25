var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");
var eventproxy = require("eventproxy");

var app = express();

app.get("/",function(req,res){
	superagent.get('https://cnodejs.org')
	.end(function(err,text){
		if(err){
			return next(err);
		}

		var $ = cheerio.load(text.text);
		var items = [];
		$('#topic_list .topic_title').each(function(idx,e){
			var $e =$(e);
			items.push({
				title:$e.attr('title'),
				href: $e.attr('href')
			})
			console.log(e);
		})
		res.send(items);
	})
})

app.listen(process.env.PORT || 5000);