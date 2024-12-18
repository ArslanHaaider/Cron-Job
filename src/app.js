const express = require("express");
const runCronJob = require("./jobs/cron");

const app = express();

// Middleware or routes (if any)
app.get("/", (req, res) => {
    res.send("Express server with CRON job is running");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Start CRON job
runCronJob();
