const express = require("express");
const cors = require('cors')
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require('mongodb').ObjectId

const port = process.env.PORT || 5000;
// middleware 
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("server is running home ");
});

const uri =
  "mongodb+srv://costumers:AjhyVNhaexYPCFJz@cluster0.fe8tu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// ---------------------
async function run() {
  try {
    await client.connect();
    const myCollection = client.db("customers").collection("user");
   

   // get user
   app.get('/user', async(req, res) => {
    const query = {};
    const cursor = myCollection.find(query);
    const users = await cursor.toArray()
    res.send(users)
   }) 
   
  //  get user id 
  app.get('/user/:id', async (req, res) => {
     const id = req.params.id 
     const query = {_id: ObjectId(id)};
     const result = await myCollection.findOne(query);
     res.send(result)
  })

  // pu update user 
   app.put('/user/:id', async (req, res) => {
     const id = req.params.id 
     const displayUser = req.body
     const filter = {_id: ObjectId(id)};
     const options = { upsert: true };
     const updateDoc = {
      $set: {
       name: displayUser.name ,
       email: displayUser.email
      },
    };
    const result = await myCollection.updateOne(filter, updateDoc, options);
      console.log(result);
      res.send(result)
   }) 


    // post user : add to new user
    app.post('/user', async (req, res) => {
        const newUser = req.body
        const result = await myCollection.insertOne(newUser);
        res.send(result)
    })

     // delete user
     app.delete('/user/:id', async (req, res) => {
        const id = req.params.id
        console.log(id);
        const query = {_id: ObjectId(id)};
        console.log(query);
        const result = await myCollection.deleteOne(query);
        console.log('delete', result);
         res.send(result)
     }) 


  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);
// ------------------------

app.listen(port, () => {
  console.log(`crud server running on port ${port}`);
});
