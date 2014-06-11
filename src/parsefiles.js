var handlebars = require('handlebars'),
	async = require('async'),
	fs = require('fs');

/* handlefiles.parseFiles(files, object, callback(err, string)) */
module.exports = function(files, object, callback) {
	async.map(files, fs.readFile, function(err, results) {
		if (err) {
			callback(err, null);
			return;
			// Stop all further processing
		}

		// Now get UTF-8 strings from all of the results, since we got buffers returned
		var fileContents = [];
		for (var i = 0; i < results.length; i++) {
			fileContents[i] = results[i].toString('utf8');
		}

		// Now that we have all the file contents, append them together.
		var concatenatedContents = '';
		for (var i = 0; i < fileContents.length; i++) {
			concatenatedContents += fileContents[i];
		}

		// Now we have all the concatenated file contents. Lets compile.
		var template = handlebars.compile(concatenatedContents);

		// Lets parse the object into the template...
		var output = template(object);

		// Since we now have the compiled output, we're done. Lets callback.
		callback(null, output);
	});
};