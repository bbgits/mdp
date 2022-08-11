import connectToMongoAsGlobalCLIENT from './connectToMongoAsGlobalCLIENT.js';
import disconnectFromMongoAsGlobalCLIENT from './disconnectFromMongoAsGlobalCLIENT.js'

console.log("Start of zDemo")

console.log("\n Calling connectToMongo...")
connectToMongoAsGlobalCLIENT()

console.log("\n Calling disconnectFromMongo...")
disconnectFromMongoAsGlobalCLIENT()




console.log("End of zDemo")


