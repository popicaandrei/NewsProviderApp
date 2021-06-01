const express = require("express");
const router = express.Router();
const authorize = require("./permissions");
const articleModel = require("../models/article");

router.get("/", authorize, async (req, res) => {
  try {
    const articles = await articleModel.find({
      user: req.user.email,
    });
    res.send(articles);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:articleId", authorize, async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.articleId);
    if (article.user != req.user.email)
      res.status(403).send("There are no permissions to see the saved article");
    else {
      res.send(article);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", authorize, async (req, res) => {
  const article = new articleModel({
    source: req.body.source,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    user: req.user.email,
  });

  try {
    const savedArticle = await article.save();
    res.send(savedArticle);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:articleId", authorize, async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.articleId);
    if (article.user != req.user.email)
      res.status(403).send("There are no permissions to delete the saved article");
    else {
      const removedArticle = await articleModel.remove({
        _id: req.params.articleId,
      });
      res.send(removedArticle);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:articleId", authorize, async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.articleId);
    if (article.user != req.user.email)
      res.status(403).send("There are no permissions to update the saved article");
    else {
      const updatedArticle = await articleModel.updateOne(
        { _id: req.params.articleId },
        {
          $set: {
            title: req.body.title,
            description: req.body.description,
            source: req.body.source,
            url: req.body.url,
          },
        }
      );
      res.send(updatedArticle);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
