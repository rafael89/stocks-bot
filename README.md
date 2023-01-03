# stocks-bot
Discord Bot to get realtime and historical stock market data using Alpha Vantage API

## Commands
### Quote
Returns the price and volume information for a token of your choice

`/quote`

### Search

Returns the best-matching symbols and market information based on keywords of your choice.

`/search`

## Setup
1. [Create your app with a Bot](https://discordapp.com/developers/applications/me).
2. Add an [.env] file on root
2. Copy your bot's secret token and paste it into [.env].
3. Get your free Alpha Vantage API Key [Alpha Vantage API Key](https://www.alphavantage.co/support/#api-key), paste it into [.env].
4. [Install Node.js](https://nodejs.org/en/download): `brew install node`
5. [Install the dependencies](./package.json): `npm install`
6. [Run the bot](./index.js): `npm start`