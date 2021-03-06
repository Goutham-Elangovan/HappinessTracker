const express = require('express');
const router = express.Router();

//Emotion Model
const Emotion = require('../../models/Emotions');

//POST Emotions - Team Name, Individual Emotion and Team Emotion
router.post('/', (req, res) => {
    const newEmotion = new Emotion({
        teamName: req.body.teamName,
        individualEmotion: req.body.individualEmotion,
        teamEmotion: req.body.teamEmotion
    });

    newEmotion.save().then(individualEmotion => res.json(individualEmotion));
});


module.exports = router;
