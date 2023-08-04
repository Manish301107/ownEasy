const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const db = 'staffList'

const connect = async ()=>{
    const result =  await client.connect()
    const database = client.db(db) 
    return database.collection('staffName')
}

module.exports = connect 



// const insert = await collection.insertOne({name:"Naveen Bansal",Post:"CEO",Company:"Pragati.ai"})
    // const delte = await collection.deleteOne({Company:"Pragati.ai"})  
    // await console.log(result)
    // console.log(delte) 
    // return await collection.find().toArray()
 