var events = require('events');

var progressBar = new events.EventEmitter();

progressBar.on('start', function() {
	console.log('Starting');
});

progressBar.on('progress', function(counter) {
	if (counter % 10 === 0) {
		console.log('you\'ve reached '+counter);
	}
});

progressBar.on('end', function(counter) {
	console.log('You\'re at '+counter );
});

progressBar.emit('start');

var count = 100;
var counter = 0;

while (counter < count){
    progressBar.emit('progress', counter);   
    counter++;
}
progressBar.emit('end', counter);


