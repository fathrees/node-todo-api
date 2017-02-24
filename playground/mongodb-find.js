const { MongoClient, ObjectID } = require('mongodb');

const find = ({ db, collection, query }) => {
  db.collection(collection).find(query).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => console.log('Unable to fetch docs'));
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  find({db, collection: 'Users', query: { name: 'Ruslan'} });

  db.close();
});
