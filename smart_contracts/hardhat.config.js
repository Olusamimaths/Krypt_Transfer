// 0xd8A36055A19dcC38e085bA37Bd63b0Ad274a11CC

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/KNPIRJudpGWW8qBwb9iDsS_jf1DdLGt-",
      accounts: [
        "cf969cf2b1ff6884baf422f32cad976f7f0ddfbe83b4adf3262bfea305982a74",
      ],
    },
  },
};
