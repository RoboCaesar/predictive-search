//https://nextjs.org/learn/basics/server-side-support-for-clean-urls/create-a-custom-server

const express = require('express')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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


app.prepare()
// .then(() => {
//     fs.readFile('./citylist/citylist.json', (err, data) => {
//         if (err) return(err);
//         return(JSON.parse(data));
//     });
// })
.then(async () => {
  let cityData = await loadCityData();
  console.log("Loaded city data with length " + cityData.length);
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})