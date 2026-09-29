let express = require('express');

let router = express.Router();

let users = require('../models/users');

let bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {

    try {

        let data = req.body;

        data.password = await bcrypt.hash(data.password, 10);

        let newuser = new users(data);

        await newuser.save();

        res.send("Employee registered successfully");

    } catch (err) {

        res.status(500).send(err.message);

    }

});

router.post("/login", (req, res) => {

    res.send("login page called");

});

router.get("/viewtask", (req, res) => {

    res.send("viewtask page called");

});

module.exports = router;