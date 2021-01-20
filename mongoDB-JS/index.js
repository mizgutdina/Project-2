//create the client class
const {MongoClient} = require("mongodb") //.MongoClient;

const uri = "mongodb://localhost:27017"

connect();
async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("labData_db");
        console.log(`Connected to database ${db.databaseName}`)
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        client.close();
    }
}
