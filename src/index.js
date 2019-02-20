import express from "express";
import dotenv from "dotenv";

import routes from "./routes.js";
import proxy from "./proxy";

dotenv.config();
let app = express();

//Import proxy if exists
if(typeof proxy == "function" && process.env.BACKEND_ALIAS){
    app.use(process.env.BACKEND_ALIAS, routes());
    app.use(proxy());
}
else{
    app.use(routes());
}

const PORT = process.env.PORT || 5556;

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
