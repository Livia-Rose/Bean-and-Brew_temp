const express = require('express');
const path = require('path');
const app = express();

// Serve static files like CSS and images from /public
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for the main page (Explore button points here)
app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`☕ Server running at http://localhost:${PORT}`);
});
