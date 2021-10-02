const auth = require("../auth/middleware");
const { Router } = require("express");
const Story = require("../models").story;

const router = new Router();

router.delete("/:id", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.id);
    const storyToDelete = await Story.findByPk(storyId);
    if (!storyToDelete) {
      res.status(404).send("Story not found");
    }
    await storyToDelete.destroy();
    res.status(204).send({ message: "Story deleted" });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    console.log("my req", req.body);
    const { name, content, imageUrl, spaceId } = req.body;
    if (!name || !imageUrl || !content || !spaceId) {
      return res.status(400).send("Please add the correct information");
    }
    const newStory = await Story.create({
      name,
      content,
      imageUrl,
      spaceId,
    });
    res.status(201).send(newStory);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
