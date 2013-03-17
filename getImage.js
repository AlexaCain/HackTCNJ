function searchFor (search) {
	var xhr = new XMLHttpRequest();
	var key = "your key here!!";
	var enckey = Base64.encode(key + ":" + key);

	var url = "https://api.datamarket.azure.com/Data.ashx/Bing/Search/Composite?";
	url += "Sources=%27image%27&Adult=%27Strict%27&ImageFilters=%27Size%3ASmall%2BAspect%3ASquare%27&$format=json&$top=3";
	url += "&Query=" + formatQuery(search);

	xhr.open("GET", url, false);
	xhr.setRequestHeader("Authorization", "Basic " + enckey);

	var resArr = new Array();

	xhr.onload = function() {
		resArr = getResults(xhr.response);
	};

	function getResults (data) {
		var parsed = JSON.parse(data);
		// console.dir(parsed);
		var r = new Array();
		// console.log(parsed.d.results[0].ImageTotal);
		r[0] = parsed.d.results[0].ImageTotal;
		var limit = (parsed.d.results[0].Image < 3) ? parsed.d.results[0].Image : 3;
		console.dir(parsed);
		for (var i = 0; i < 3; i++) {
			r[i+1] = parsed.d.results[0].Image[i].Thumbnail.MediaUrl;
		};
		return r;
	}
	xhr.send();

	// images = getImages(resArr.slice(1));
	// for (var i = 1; i < resArr.length; i++) {
	// 	resArr[i] = images[i];
	// };

	return resArr;
}

function formatQuery (q) {
	q = "'" + q + "'";
	return encodeURIComponent(q);
}

// function getImageName(url) {
// 	var pat = /[^\/]+\.\w{3,4}$/;
// 	return url.match(pat)[0];
// }

// function getImages (urls) {
// 	var images = new Array();
// 	for (var i = 0; i < urls.length; i++) {
// 		var url = urls[i]
// 		var name = getImageName(url);
// 		var ext = name.substring(name.lastIndexOf(".")+1);
// 		console.log("Processing " + url + " by storing at " + name);

// 		var xhr = new XMLHttpRequest();
// 		xhr.responseType = 'blob';
// 		xhr.open('GET', url, true);

// 		xhr.onload = function(e) {
// 		window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
// 		window.requestFileSystem(TEMPORARY, 1024 * 1024, function(fs) {
// 			fs.root.getFile(name, {create: true}, function(fileEntry) {
// 				fileEntry.createWriter(function(writer) {
// 				writer.onwrite = function(e) { 
// 					console.log("Wrote image " + name);
// 				};
// 				writer.onerror = function(e) {
// 					console.log("ERROR: Failed to write " + name);
// 				};

// 				var blob = new Blob([xhr.response], {type: 'image/'+ext});

// 				writer.write(blob);

// 				images[i] = fileEntry.toURI();
// 			  }, onError);
// 			}, onError);
// 		  }, onError);
// 		};
// 	};
// 	return images;
// }