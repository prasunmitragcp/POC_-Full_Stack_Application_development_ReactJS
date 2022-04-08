const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/dbcollection", {
            target: "https://javamicroservices.uc.r.appspot.com",
            changeOrigin: true
        })
    );
};