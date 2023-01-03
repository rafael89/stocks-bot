'use strict';

/*
    Alpha Vantage API Documentation
    https://www.alphavantage.co/documentation/
*/

const fetch = require("node-fetch");

/*
  Name: fetchPatiently(String url, Object params): Object
  Description: Wrapper for node-fetch which retries upon 408 and 502 error codes
  Returns: HTTP response
*/
async function fetchPatiently(url, params) {

    let response = await fetch(url, params);

    while (response.status === 408 || response.status === 502) {
        // Wait three seconds between each new request
        await new Promise(res => setTimeout(res, 3000));
        response = await fetch(url, params);
    }

    return response;
}

function requestSearchEndpoint(keyword) {
    return new Promise(async (resolve, reject) => {

        const response = await fetchPatiently(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.ALPHAVINTAGE_KEY}`, {
            method: "GET",
            headers: {
                'User-Agent': 'request'
            }
        }).catch(reject);

        if (!response.ok) return;

        const json = await response.json().catch(reject);        
        if (!json) return;

        resolve(json)
    });
}

module.exports.searchEndpoint = async (keyword) => {
    const result = await requestSearchEndpoint(keyword).catch(console.error);

    return result;
};

function requestQuoteEndpoint(symbol) {
    return new Promise(async (resolve, reject) => {

        const response = await fetchPatiently(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHAVINTAGE_KEY}`, {
            method: "GET",
            headers: {
                'User-Agent': 'request'
            }
        }).catch(reject);

        if (!response.ok) return;

        const json = await response.json().catch(reject);        
        if (!json) return;

        resolve(json)
    });
}

module.exports.quoteEndpoint = async (symbol) => {
    const result = await requestQuoteEndpoint(symbol).catch(console.error);

    return result;
};