const router = require('express').Router()
module.exports = router
const path = require('path')

router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

