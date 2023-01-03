# stocks-bot
Realtime and historical stock market data Discord bot using [Alpha Vantage](https://www.alphavantage.co/).

## Commands
### Quote
Returns the price and volume information for a token of your choice

`/quote`

### Search

Returns the best-matching symbols and market information based on keywords of your choice.

`/search`

## Setup
1. [Create your app with a Bot](https://discordapp.com/developers/applications/me).
2. Add an .env file on root
3. Copy your bot's secret token and paste it into .env (DISCORD_TOKEN)
4. Get your free Alpha Vantage API Key [Alpha Vantage API Key](https://www.alphavantage.co/support/#api-key), paste it into .env (ALPHAVANTAGE_KEY)
5. [Install Node.js](https://nodejs.org/en/download): `brew install node`
6. [Install the dependencies](./package.json): `npm install`
7. [Run the bot](./index.js): `npm start`
