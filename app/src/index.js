
/*
Author: Murtadha Marzouq
Assignment: Express Web Server
*/

const express = require('express');

const app = express();


// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
    }
);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

