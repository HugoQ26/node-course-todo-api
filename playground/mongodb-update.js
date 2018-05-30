// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDb server');
	} else {
		console.log('Connected!!');
	}

	db.collection('Users').findOneAndUpdate({name: 'Filip'}, {$inc: {age: -3}}, {returnOriginal: false})
	.then((res) => {
		console.log(res);
	})

	// db.close();
});
