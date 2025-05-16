const Logger = require("logplease");
const numbers = require("./numbers");

const logger = Logger.create("utils");

const numArray = [2, 3, 101, 201, 202, 100];

numArray.forEach((num) => {
  if (numbers.isEven(num)) {
    logger.info(`The number ${num} is even.`);
  } else {
    logger.error(`The number ${num} is not even.`);
  }
});
