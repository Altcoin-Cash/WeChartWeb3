var EnumChainId = require("./chain.id");
var UtilsAddresses = require("../utils/addresses");

const EnumMainTokens = {
  [EnumChainId.ALT]: {
    ALT: {
      address: UtilsAddresses.toCheckSum(
        "0x48721ADeFE5b97101722c0866c2AffCE797C32b6"
      ),
      decimals: 18,
    }, //
    WATT: {
      address: UtilsAddresses.toCheckSum(
        "0x6645143e49B3a15d8F205658903a55E520444698"
      ),
      decimals: 18,
    }, //
    ALTPEPE: {
      address: UtilsAddresses.toCheckSum(
        "0xD350EcD60912913cc15d312ef38adECa909eCDD5"
      ),
      decimals: 18,
    }, //
    MALT: {
      address: UtilsAddresses.toCheckSum(
        "0xaF5D066Eb3e4147325d3ed23F94bc925fbf3B9EF"
      ),
      decimals: 18,
    },
  },
  [EnumChainId.BSC]: {
    BTC: {
      address: UtilsAddresses.toCheckSum(
        "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
      ),
      decimals: 18,
    }, //
    DOT: {
      address: UtilsAddresses.toCheckSum(
        "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
      ),
      decimals: 18,
    }, //

    WBNB: {
      address: UtilsAddresses.toCheckSum(
        "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
      ),
      decimals: 18,
    },
    BUSD: {
      address: UtilsAddresses.toCheckSum(
        "0xe9e7cea3dedca5984780bafc599bd69add087d56"
      ),
      decimals: 18,
    }, //
    USDC: {
      address: UtilsAddresses.toCheckSum(
        "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
      ),
      decimals: 18,
    }, //
    USDT: {
      address: UtilsAddresses.toCheckSum(
        "0x55d398326f99059ff775485246999027b3197955"
      ),
      decimals: 18,
    }, //
    DAI: {
      address: UtilsAddresses.toCheckSum(
        "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
      ),
      decimals: 18,
    },
  },
};

EnumMainTokens[EnumChainId.BSC].STABLECOINS = [
  "BUSD",
  "USDC",
  "USDT",
  "DAI",
].map((e) => EnumMainTokens[EnumChainId.BSC][e].address);
EnumMainTokens[EnumChainId.BSC].MAIN = EnumMainTokens[EnumChainId.BSC]["WBNB"];

// [0x10ED43C718714eb63d5aA57B78B54704E256024E, 0x10ED43C718714eb63d5aA57B78B54704E256024E,0x10ED43C718714eb63d5aA57B78B54704E256024E,0x10ED43C718714eb63d5aA57B78B54704E256024E,0x0000000000000000000000000000000000000000]
// [0xe9e7cea3dedca5984780bafc599bd69add087d56, 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c, 0x55d398326f99059ff775485246999027b3197955, 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d]
// 1000000000000000000
module.exports = EnumMainTokens;

// usdc -> usdt -> ice -> ftm
