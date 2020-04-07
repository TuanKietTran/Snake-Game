const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Snake game.\n Loading ...");
})

app.use(express.static('website'));