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
        var quoteCode = interaction.args[0];

        if(!quoteCode.endsWith('.sa'))
            quoteCode += '.sa';

        let quote = await quoteEndpoint(quoteCode);

        return {
            content: `${interaction.args[0]} Price: \`${quote["Global Quote"]["05. price"]}\`.`,
        }
    }
}