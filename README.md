Handlefiles
======

![Handlefiles NPM](https://nodei.co/npm/handlefiles.png)

> Handlefiles is a Handlebars library, used for simplifying the reading, compilation, and parsing process for multiple files.

### Install
```bash
$ npm install handlefiles --save
```

### Documentation
```javascript
var handlefiles = require('handlefiles');

var files = [
	'example/file1.html',
	'example/file2.html'
	],
	object = {
		pageName: "My Custom Page Name"
	};

handlefiles.parseFiles(files, object, function(err, output) {
	if (err) {
		// handle error
	}

	// We now have the output variable with our read, compiled, and parsed output,
	//   ready to be sent to the client.
});
```