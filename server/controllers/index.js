// Creating Express Routers
const router = require("express").Router();

// Requiring in routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// Route prefixes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Exporting Routes
module.exports = router;
