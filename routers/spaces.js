const { Router } = require("express");
const Space = require("../models").space;
const Stories = require("../models").story;
const auth = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res, next) => {
  // res.send("testing");
  const allSpaces = await Space.findAll({ include: [Stories] });
  res.send(allSpaces);
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const spaceById = await Space.findByPk(id, {
      include: [Stories],
    });
    if (!spaceById) {
      return res.status(404).send("Space not found");
    }
    res.send(spaceById);
  } catch (e) {
    console.log(e.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    console.log("backend here", req.body);
    const space = await Space.findByPk(parseInt(req.params.id));
    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }
    const { title, description, backgroundColor, color } = req.body;
    await space.update({ title, description, backgroundColor, color });

    return res.status(200).send({ space });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
