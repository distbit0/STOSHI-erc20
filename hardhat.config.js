require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
    solidity: "0.8.18",
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    paths: {
        sources: "./contracts",
        artifacts: "./artifacts",
    },
    networks: {
        mainnet: {
            url: "https://eth.llamarpc.com",
            accounts: [process.env.PRIVATE_KEY ?? ""],
        }
    }
};