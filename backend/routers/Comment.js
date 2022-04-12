const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CommentDB = require('../models/Comments');

router.post('/', async (req, res) => {

    try{
        const commentData = new CommentDB({
            question_id: req.body.question_id,
            comment: req.body.comment,
            user: req.body.user,
        });

        await commentData.save()
        .then((doc) => {
            res.status(201).send(doc);
        })
        .catch(() => {
            res.status(400).send({
                status: false,
                message: "Error while adding comment",
            });
        });
    } catch(err){
        res.status(500).send({
            status: false,
            message: "Error while adding comment",
        });
    }
});

module.exports = router;