const router = require("express").Router();
const savedRoutes = require("./savedBooks");

// Book routes
router.use("/saved", savedRoutes);

module.exports = router;
