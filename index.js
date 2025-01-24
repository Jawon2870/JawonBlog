const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    console.log(req.url);
    res.send("??? what you want to see here?");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
