const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://ms2803429:3011@cluster0.0aliklf.mongodb.net/'
const client = new MongoClient(url)

const db = 'staffList'

const connect = async ()=>{
    const result =  await client.connect()
    const database = client.db(db) 
    const show = await database.collection('Newstaff')
    const j = await show.find().toArray()
    await console.log(j)
}
connect()
// module.exports = connect 




// const insert = await collection.insertOne({name:"Naveen Bansal",Post:"CEO",Company:"Pragati.ai"})
    // const delte = await collection.deleteOne({Company:"Pragati.ai"})  
    // await console.log(result)
    // console.log(delte) 
    // return await collection.find().toArray()
 