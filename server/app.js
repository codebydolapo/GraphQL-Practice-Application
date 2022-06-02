const express = require("express");
const app = express();
const PORT = 4000;
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
