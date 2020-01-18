import express from "express"; //importation with last version of ES6 with babel 
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get('/',(req,res) =>{
    res.json({
        message:"hi"
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema: schema
}));




app.listen(3000,() =>{
    console.log("server on port 3000");
});