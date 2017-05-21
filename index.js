'use strict'
let express = require('express');
let path = require('path');
let app = express();
// Serve static files
app.use(express.static(__dirname+ '/public'));

// Otherwise return index page
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname +'/public/views/index.html'));
});
let PORT = process.env.PORT || 3000
app.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Listening on port 3000");
	}
});
