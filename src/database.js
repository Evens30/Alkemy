import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect("mongodb://localhost/apialkemy",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: true,
    useCreateIndex: true
  }) 
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));