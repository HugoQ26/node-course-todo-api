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

	//delete many

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
	// 	console.log(res);
	// });
	
	//delete one

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });
	
	//find one end delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })


	var us = db.collection('Users');
	us.findOneAndDelete({name: 'Gosia'}).then((res) => {
		console.log(`You just deleted ${res.lastErrorObject.n} input: ${JSON.stringify(res.value, undefined, 2)}`);
	}).then(() => {
		us.deleteMany({name: 'Marcin'}).then((res) => {
			console.log(`You just deleted ${res.CommandResult.result.n} input`);
		})
	})



	// db.close();
});
