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

	// db.collection('Todos').find({_id: new ObjectID('5b0b912487af621ace0f3cf6')}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log('Todos count:', count);
		
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });
	

	// db.collection('Users').find({name: "Marcin"}).toArray().then((docs) => {
	// 	return JSON.stringify(docs, undefined, 2);		
	// }).then((docs) => {
	// 	db.collection('Users').find({name: "Marcin"}).count().then((count) => {
	// 		if(count === 0) {
	// 			return console.log('Brak wyników');
	// 		}
	// 		console.log(`Users count : ${count} `, docs);
	// 	})
	// }).catch((err) => {
	// 	console.log(err);
	// })

	var us = db.collection('Users');

	us.find({name: "Marcin"}).toArray().then((docs) => {
		var list = JSON.stringify(docs, undefined, 2);
		return list;		
	}).then((docs) => {
		us.find({name: "Marcin"}).count().then((count) => {
			if(count === 0) {
				return console.log('Brak wyników');
			}
			console.log(`Users count : ${count} `, docs);
		})
	}).catch((err) => {
		console.log(err);
	});


	// db.close();
});

