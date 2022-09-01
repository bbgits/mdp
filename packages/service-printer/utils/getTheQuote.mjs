import { readFile } from 'fs/promises';



export default async function getTheQuote() {
    var quoteNumber = Math.floor(Math.random() * 1400)
    var allQuotes = JSON.parse(
        await readFile(
            new URL('../quotes.json', import.meta.url)
        )
    );
    var myQuote = await allQuotes[quoteNumber]
    return await myQuote
}

// console.log(await getTheQuote());