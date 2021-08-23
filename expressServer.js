const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello World!!!');
=======
    res.send('Hello World!');
>>>>>>> 2398c27251e1f132bb8a668c13ef38099e6e54cb
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);

});