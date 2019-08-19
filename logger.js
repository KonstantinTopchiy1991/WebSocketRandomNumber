const fs = require("fs");
const express = require('express');
const router = express.Router();

// router.get('/api', function (req, res) {
//     console.log('fileContent');
//     let fileContent = fs.readFileSync("text.txt", "utf8");
//     console.log(fileContent);
//     res.send({fileContent});
// });

router.post('/api', function (req, res) {
    console.log('fileContent last');
    let fileContent = fs.readFileSync('text.txt', 'utf8');
    let lines = fileContent.trim().split("\n");
    let lastLine = lines[lines.length - 1];
    console.log(lastLine);

    res.send({lastLine});
});

module.exports = router;