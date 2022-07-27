const router = require("express").Router();

router.get("", (_, res) => {
  res.status(200).json({ message: "Welcome to the home page" });
});


module.exports = router;