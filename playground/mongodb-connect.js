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

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		console.log('Unable to insert todo', err);
	// 	} else {
	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	}
	// })

	// db.collection('Users').insertOne({
	// 	name: 'Filip',
	// 	age: 4,
	// 	location: 'Poland'
	// }, (err, result) => {
	// 	if (err) {
	// 		console.log('Unable to insert data', err);
	// 	} else {
	// 		console.log('Added one input', result.ops, result.ops[0]._id.getTimestamp());
	// 	}
	// })

	db.close();
});

