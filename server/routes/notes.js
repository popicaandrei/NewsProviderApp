const express = require("express");
const router = express.Router();
const authorize = require("./permissions");
const noteModel = require("../models/note");

router.get("/", authorize, async (req, res) => {
  try {
    const notes = await noteModel.find({
      user: req.user.email,
    });
    res.send(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:noteId", authorize, async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.noteId);
    if (note.user != req.user.email)
      res.status(403).send("There are no permissions to see the note");
    else {
      res.send(note);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", authorize, async (req, res) => {
  const note = new noteModel({
    title: req.body.title,
    content: req.body.content,
    user: req.user.email,
  });

  try {
    const savedNote = await note.save();
    res.send(savedNote);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:noteId", authorize, async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.noteId);
    if (note.user != req.user.email)
      res.status(403).send("There are no permissions to delete the note");
    else {
      const removedNote = await noteModel.remove({ _id: req.params.noteId });
      res.send(removedNote);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:noteId", authorize, async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.noteId);
    if (note.user != req.user.email)
      res.status(403).send("There are no permissions to update the note");
    else {
      const updatedNote = await noteModel.updateOne(
        { _id: req.params.noteId },
        { $set: { title: req.body.title, content: req.body.content } }
      );
      res.send(updatedNote);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
