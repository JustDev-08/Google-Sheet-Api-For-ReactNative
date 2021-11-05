const sheetdb = require("sheetdb-node");
const client = sheetdb({ address: 'or04hopshmzin' });

// Read whole spreadsheet
client.read().then(res => {
    console.log(res)
}) 
    