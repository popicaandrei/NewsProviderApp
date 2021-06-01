const express = require("express");
const router = express.Router();
const authorize = require("./permissions");

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.API_KEY);

router.get("/headlines", authorize, (req, res) => {

  newsapi.v2
    .topHeadlines({
      category: req.query.category,
      language: "en",
    })
    .then((content) => {
      res.send(content);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.get("/subjects", authorize, (req, res) => {

    newsapi.v2
      .everything({
        qInTitle: req.query.subject,
        language: 'en',
        sortBy: 'relevancy'
      })
      .then((content) => {
        res.send(content);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

module.exports = router;
