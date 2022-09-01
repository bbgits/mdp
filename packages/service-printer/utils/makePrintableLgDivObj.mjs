/*
Logic function passes Lg Div Variables to appropriate function:
    -if type is "Twitter" pass vars to Twitter function
    -if type is "Insta" pass vars to Insta function
    -if type is "News" pass vars to News function
    -RETURN appropriate printable object
*/


import makePrintableTwitterObj from './makePrintableTwitterObj.mjs';
import makePrintableInstaObj from './makePrintableInstaObj.mjs';
import makePrintableNewsObj from './makePrintableNewsObj.mjs';


export default async function makePrintableLgDivObj(myClient, myType, myData1, myData2, myData3, myData4, myData5) {
    console.log("")
    console.log("***********************************")
    console.log("***** MAKING PRINTABLE LG DIV *****")
    console.log("***********************************")
    console.log("***** TYPE: " + myType)
    console.log("***********************************")
    console.log("")

    if (myType === "Twitter") {
        var lgDivObj = await makePrintableTwitterObj(myClient, myType, myData1, myData2, myData3, myData4, myData5);
    } else if (myType === "Insta") {
        var lgDivObj = await makePrintableInstaObj(myClient, myType, myData1, myData2, myData3, myData4, myData5);
    } else if (myType === "News") {
        var lgDivObj = await makePrintableNewsObj(myClient, myType, myData1, myData2, myData3, myData4, myData5);
    }
    return await lgDivObj;
};



