const UtilsAddresses = require("../utils/addresses");
const EnumChainId = require("./chain.id");

const EnumContracts = {
  [EnumChainId.ALT]: {
    MAIN_ROUTER: UtilsAddresses.toCheckSum(
      "0xae168Ce47cebca9abbC5107a58df0532f1afa4d6"
    ), // Swapin
    MAIN_FACTORY: UtilsAddresses.toCheckSum(
      "0x347aAc6D939f98854110Ff48dC5B7beB52D86445"
    ), // Swapin
  },
};

module.exports = EnumContracts;
