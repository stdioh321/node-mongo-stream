import { MongoClient } from 'mongodb'

const uri = "mongodb://localhost:27017/tmp";
const client = new MongoClient(uri);

async function run(){
    await client.connect();
    const db = client.db();
    const messages = db.collection('teste')
    const messagesStream = messages.watch();
    messagesStream.on("change",(next)=>{
      console.log(next);
    })
}


run()
.catch(err=>{
  console.log(err);
});