var request = require('request');
var InstagramPosts, streamOfPosts;
InstagramPosts = require('instagram-screen-scrape').InstagramPosts;

var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});
var path = require('path');
var appDir = path.dirname(require.main.filename);
 
exports.process = function(req, res) {
	var username = req.body.name;
	var duration = req.body.duration;
	console.log('duration',duration);
	streamOfPosts = new InstagramPosts({
	  username: username
	});
	
	var posts = [];
	var count = 0;
	var now = new Date().getTime();
	var startTime, endTime;
	
	var lastMonth = now - 1000 * 60 * 60 * 24 * 30;
	console.log('lastMonth:',lastMonth)
	
	function getTimestampFromDate(inputDate) {
		inputDate=inputDate.split("-");
		var newDate=inputDate[1]+"/"+inputDate[0]+"/"+inputDate[2];
		return new Date(newDate).getTime();
	}
	
	switch(duration) {
		case 'option1' :
			startTime = now - 1000 * 60 * 60 * 24 * 30;
			endTime = now;
			break;
		case 'option2' :
			startTime = now - 1000 * 60 * 60 * 24 * 365;
			endTime = now;
			break;
		case 'option3' :
			startTime = getTimestampFromDate('01-01-2016');
			endTime = getTimestampFromDate('31-12-2016');
			break;
	}
	 
	streamOfPosts.on('data', function(post) {
		
		console.log('post:',post)
		
		if (typeof post == 'undefined' ||  post == null) {
			console.log('PRIVATE')
			res.json('private');
		}

		
	  var time = post.time * 1000;

		count++;
	
		console.log(time)
		if (time < startTime) {
			this.destroy();
		}
		if (time >= startTime && time <= endTime) {
			posts.push(post)
		}

	})
	streamOfPosts.on('end', function() {
		if (posts[0] == 'undefined' || posts[0] == null) {
					console.log('PRIVATE')
	
			res.json('private');
			return;
		}
		console.log('finished')
		//res.json(posts)
		sortAndRenderImage(posts, username, res);
	})
	streamOfPosts.on('error', function(err) {
		//console.log(posts)
		console.log('THISERROR',err)
		res.json(err);
		//res.json(posts)
	})
}

function sortAndRenderImage(posts, username, res) {
	
		var objToSort = {}
		//make an obj of format { url: likes, obj: likes... }
		for (var i=0; i < posts.length; i++) {
			objToSort[posts[i].media.replace('https','http')] = posts[i].likes;
		}
		var imageUrls = [];
		var sortable = [];
		for (var url in objToSort) {
			sortable.push([url, objToSort[url]])
		}
		sortable.sort(function(a, b) {
		  return a[1] - b[1]
		})
		

		//get last 9 items of sortable and push them to imgs object

		for (var i = sortable.length - 1; i > sortable.length - 10; i--) {
			if (typeof sortable[i] != 'undefined' && sortable[i][0].search('.jpg') > 0) {
				imageUrls.push(sortable[i][0])
			}
		}
		console.log(imageUrls)
		
		var random = Math.random().toFixed(6)*1000000;

		gm(imageUrls[0])//.resize('360','360')
			.montage(imageUrls[1])
			.montage(imageUrls[2])
			.montage(imageUrls[3])
			.montage(imageUrls[4])
			.montage(imageUrls[5])
			.montage(imageUrls[6])
			.montage(imageUrls[7])
			.montage(imageUrls[8])
			.geometry('360x360+0+0')
			.tile('3x3')
			.compress('JPEG')
			.quality(50)
			.write(appDir +'/static/uploads/' + username + '-' + random + '.jpg', function(err) {
				if(!err) {
					console.log("Written montage image.");
					res.json('/uploads/' + username + '-' + random + '.jpg');
				} else {
					console.log('GM Err:',err);
				}
			});
}
