const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("post", "/:slug");
routes.add("nextpost", "/:id");
