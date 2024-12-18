const { ethers } = require('ethers');
const config = require('../config/env');

// Initialize Ethereum provider and wallet
const provider = new ethers.JsonRpcProvider(config.infuraUrl);
const wallet = new ethers.Wallet(config.privateKey, provider);

// Mock ABI for demonstration
const abi = [
    "function processAddresses(address[] addresses) public payable",
];

// Contract instance
const contract = new ethers.Contract(config.contractAddress, abi, wallet);

// Function to call the smart contract function
const callSmartContract = async (addresses) => {
    try {
        const tx = await contract.processAddresses(addresses, { gasLimit: 3000000 });
        console.log(`Transaction sent: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`Transaction confirmed: ${receipt.transactionHash}`);
    } catch (error) {
        console.error("Error calling contract:", error);
    }
};

module.exports = callSmartContract;
