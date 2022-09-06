import readTextFile from 'read-text-file';

// File Name is constructed from inputs from;
var fileName = "";

// fileName Date Suffix;
var date = new Date().toISOString().substr(0, 19);
var sixDigitDateSuffix = date.slice(0, 10)

// fileName Category Prefix
var categoryPrefix = "politics-";

// Full Filename:
var fileName = categoryPrefix + sixDigitDateSuffix + ".txt";

// find appropriate file and save components locally
var contents = readTextFile.readSync('../news_txt/' + fileName);
var contentsArray = contents.split("::")
console.log(contentsArray);

console.log("****UNPACKING****")

var storyDate = contentsArray[1];
console.log("storyDate: " + storyDate)

var storyTitle = contentsArray[3];
console.log("storyTitle: " + storyTitle)

var storyAuthor = contentsArray[5];
console.log("storyAuthor: " + storyAuthor)

var storyCategory = contentsArray[7];
console.log("storyCategory: " + storyCategory);

var storyTags = contentsArray[9];
console.log("storyTags: " + storyTags)

var storyText = contentsArray[11];
console.log("storyText: " + storyText)




