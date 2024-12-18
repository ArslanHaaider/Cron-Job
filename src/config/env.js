require('dotenv').config();

const config = {
    infuraUrl: process.env.INFURA_URL,
    privateKey: process.env.PRIVATE_KEY,
    contractAddress: process.env.CONTRACT_ADDRESS,
    schedule: process.env.SCHEDULE, // CRON schedule
};

module.exports = config;
