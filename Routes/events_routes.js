
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const {events}=require('../Model/events');



router.post('/createevent',async (req, res) => {



    let m1 = new events({description:req.body.description,event_time:req.body.event_time,name:req.body.name,
    public_view:req.body.public_view,user_id:req.body.user_id});
    p1 = await m1.save();
    console.log(p1);
    res.send(p1);
});

router.delete('/delete/', async (req, res) => {

    const m1 = await events.findByIdAndRemove(req.body.id);

    if (!m1) return res.status(404).send('The event with the given ID was not found.');

    res.send(m1+"Deleted").status(200);
});
router.get('/getevents/', async (req, res) => {
    const m1 = await events.find( ).or([ {user_id:req.body.user_id}, {'public_view':true}])
    if(!m1)
        res.send("Not Found").status(404);
    else
    res.send(m1).status(200);
});


module.exports = router;