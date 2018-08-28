const fs = require('fs')



const loadCityData = () => {
    console.log("Trying to load city data...");
    return new Promise ((resolve, reject) => {
        fs.readFile('./citylist/citylist.json', (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}

async function main() {

    console.log("This app will attempt to load a file of city locations and filter results.");
    let cityData = await loadCityData();
    console.log("City data has been loaded");

    //A regular expression - It means that it will look for words that contain the first two
    //letters shown, but if those letters are in the middle of a word, it won't count.
    let testRegEx = /\bma/i;
    let matchedResults = cityData.filter(({name}) => name.match(testRegEx));

    console.log(matchedResults);
}

main();