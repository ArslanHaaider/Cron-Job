const cron = require('node-cron');
const callSmartContract = require('../services/contract');
const createBatches = require('../utils/batch');
const config = require('../config/env');

// Mock 500 addresses for demonstration
const addresses = Array.from({ length: 500 }, (_, i) => `0x${(i + 1).toString().padStart(40, '0')}`);

const runCronJob = () => {
    cron.schedule(config.schedule, async () => {
        console.log("Starting scheduled job...");

        // Split addresses into batches (assume 50 addresses per call)
        const batchSize = 50;
        const batches = createBatches(addresses, batchSize);

        // Process each batch sequentially
        for (const batch of batches) {
            console.log(`Processing batch: ${batch}`);
            await callSmartContract(batch);
        }

        console.log("Scheduled job complete!");
    });
};

module.exports = runCronJob;
