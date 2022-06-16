var express = require("express");
var router = express.Router();
var chatModel = require("../models/Chat");
var userModel = require("../models/User")

router.get('/chatmessages/list', async (req, res) => {
    try {    
        var chatMessages = await chatModel.find().limit(10).sort('-CreatedTimestamp').populate({path: 'user', model: userModel, select: 'Email Name' });
        res.json({message: "Retrieved messages.", data: chatMessages.reverse(), success: true}).status(200);
    } catch (error) {
        res.json({message: "Something went wrong.", success: false}).status(500);
    }
})

router.post('/chatmessages/add', async (req, res) => {
    if (!req.user) {
        res.status(401);
        res.json({message: "Need to be logged in.", success: false })
        return;
    }

    try {
        var chatMessage = new chatModel({
            user: req.user._id,
            message: req.body.chatMessage
        })

        await chatMessage.save();

        res.json({message: `${chatMessage._id} chat message was added.`, data: chatMessage, success: true })
        res.status(200);
    } catch (error) {
        console.error(error);
        res.json({message: "Something went wrong.", success: false })
        res.status(500);
    }
})

router.post('/chatmessage/modify/:_Id', async (req, res) => {
    if (!req.user) {
        res.status(401);
        res.json({message: "Need to be logged in.", success: false })
        return;
    }

    try {
        var chatMessage = await chatModel.findByIdAndUpdate(req.params._Id, {
            message: req.body.chatMessage
        })

        res.json({message: `${req.params._Id} chat message was updated.`, data: chatMessage, success: true })
        res.status(200);
    } catch (error) {
        console.error(error);
        res.json({message: "Something went wrong.", success: false })
        res.status(500);
    }
})

module.exports = router;