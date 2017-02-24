const { MongoClient, ObjectID } = require('mongodb');

const insertOne = ({db, collection, doc}) => {
  db.collection(collection).insertOne(doc, (err, res) => {
    if (err) {
      return console.log('Unable to insert doc', err);
    }
    console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  });
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  // insertOne({ db, collection: 'Todos', doc: {
  //     text: 'Something to do',
  //     completed: false,
  // }});
  // insertOne({ db, collection: 'Users', doc: {
  //     name: 'Ruslan',
  //     age: 29,
  //     location: 'Ivano-Frankivsk',
  // }});

  db.close();
});
