import { index } from "./controllers/index";

export default (app) => {
    app.route('/').get(index).post((req, res) => { res.status(404); });
}
