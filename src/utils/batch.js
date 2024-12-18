// Utility to split addresses into batches
const createBatches = (addresses, batchSize) => {
    const batches = [];
    for (let i = 0; i < addresses.length; i += batchSize) {
        batches.push(addresses.slice(i, i + batchSize));
    }
    return batches;
};

module.exports = createBatches;
