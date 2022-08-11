/* 
This [WILL BE] a middleware script for compiling 'printables' from report settings:
> accepts username
> for each report of that user:
    > reads report settings/inputs
    > retrieves appropriate data from Mongo
    > saves data to a properly formatted "Printable" json (see packages\printer\myPrintable.json)
    > adds Printable json to appropriate file location
*/