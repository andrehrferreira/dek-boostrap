import express from "express";
import { index } from "./controllers/index";

let router = express.Router();

export default () => {
    router.route('/').get(index).post((req, res) => { res.status(404); });
    return router;
}
