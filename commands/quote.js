'use strict';

const { CommandType } = require("wokcommands");
const { quoteEndpoint } = require("../alphaVantage");

module.exports = {
    description: "Returns the price and volume information for a token of your choice.",
    type: CommandType.SLASH,
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: "<token>",
    callback: async (interaction) => {
        let quote = await quoteEndpoint(interaction.args[0])

        return {
            content: `${interaction.args[0]} Price: \`${quote["Global Quote"]["05. price"]}\`.`,
        }
    }
}