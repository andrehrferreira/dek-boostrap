import express from "express";
import dotenv from "dotenv";

import routes from "./routes.js";

dotenv.config();
let app = express();
routes(app);

const PORT = process.env.PORT || 5556

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
