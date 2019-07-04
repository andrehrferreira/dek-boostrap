//Application controller
import '@babel/polyfill/noConflict';

import express from "express";
import dotenv from "dotenv";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

(async () => {
    dotenv.config();

    $.set("app", express());
    $.set("dev", !(process.env.NODE_ENV === 'production'));
    await plugins($.dev ? "src/plugins" : "build/plugins");
    await controllers($.dev ? "src/controllers" : "build/controllers");

    $.app.use(await routes($.dev ? "src/routes" : "build/routes"));
    const PORT = process.env.PORT || 5555;

    $.app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})();
