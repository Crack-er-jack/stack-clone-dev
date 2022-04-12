const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const questionRouter = require('./Question');
const answerRouter = require('./Answer');
const commentRouter = require('./Comment');

router.get('/', (req,res) => {
    res.send("Get Router?");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use("/comment", commentRouter);


module.exports = router;