const MongoClient = require('mongodb').MongoClient;
// const { strictEqual } = require('assert');
const assert = require('assert');


const url = 'mongodb://localhost:27017';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client)=>{
    
    assert.strictEqual(err,null);
    
    console.log("Connected correctly to server.");

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name": "uuuuuuuuUUUUUUUUU", "description": "test description"},(err,result)=>{
         assert.strictEqual(err,null);
         console.log('After Inserting:\n')
         console.log(result.ops)

         collection.find({}).toArray((err,docs) =>{
             assert.strictEqual(err,null);

             console.log('Found:\n');
             console.log(docs);


             db.dropCollection('dishes', (err,result)=>{
                assert.strictEqual(err,null);
                client.close();
             });
         });
    });
});