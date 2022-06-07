const express = require("express")
require('dotenv').config()
const { graphqlHTTP } = require("express-graphql")
const app = express()
const PORT = 5000

const connectDB = require("./config/db")
const schema = require("./schema/schema")

connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(process.env.PORT || PORT, () => console.log(`Server running on http://localhost:${PORT}`))