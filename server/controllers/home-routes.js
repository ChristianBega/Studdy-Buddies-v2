const router = require("express").Router();
const { Topics, Categories, Subtopics } = require("../models");

// http:localhost:3001/
//GET
router.get("/", async (req, res) => {
  try {
    const topicsData = await Topics.findAll({
      include: [{ model: Categories }],
    });
    const topics = topicsData.map((topic) => topic.get({ plain: true }));
    // Renders the homepage.handlebars
    // res.render("homepage", {
    //   topics,
    //   loggedIn: req.session.loggedIn,
    // });
    res.send(topics);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
