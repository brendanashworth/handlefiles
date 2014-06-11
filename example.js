// Example usage of handlefiles.js
var handlefiles = require('./main');

var files = [
	'example/file1.html',
	'example/file2.html',
	'example/file3.html'
	];

var object = {
	pageName: "My Custom Page Name"
};

handlefiles.parseFiles(files, object, function(err, output) {
	if (err) {
		console.log('Error occurred: ' + err);
		return;
	}

	// Done.
	// The output should be example/file{1,2,3}.html all concatenated together and pageName filtered with the object.pageName.
	console.log(output);
});