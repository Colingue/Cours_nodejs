import express from "express";
import { create } from "express-handlebars";
import req from "express/lib/request.js";
import res from "express/lib/response.js";
import { ProductsController } from "./controllers/products.controller.js";
import { ProductsRepository } from "./repository/products.repository.js";
import { routes } from "./routes/products.routes.js";
import mongoose  from "mongoose"

const app = express();
const PORT = 3001;


mongoose.connect('mongodb://localhost:27017/projetnode',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const hbs = create({ extname: ".hbs" });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(
  express.urlencoded({
    extended: false,
  })
);

const repository = new ProductsRepository();
const controller = new ProductsController(repository);

app.use("/", routes(controller));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(404).send("Something broke!");
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
