require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Ka1eJZuTbw8CEIrX_RlEVFGTfRNv0Lgx',
      accounts: [
        '598ef1e9eb8c70a49aa6b7d7f7e8f505919835e00df637ff9b3c398e43183108',
      ],
    },
  },
}