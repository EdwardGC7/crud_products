const express = require("express");
const db = require('./utils/database')
const initModels = require('./models/initModels')
const productsRouter = require('./products/products.router');
const config = require('./config')
const app = express();

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json());
app.use("/products", productsRouter);


app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Running!" });
});
 

app.listen(config.port, () => {
  console.log(`Current server using port ${config.port}`);
});

