const axios = require('axios');
const DigitalOcean = require("digitalocean");

const config = require("./config.json")

const ocean = new DigitalOcean.client(config.personalAccessToken);

function vibeCheck() {
    log(`Checking the vibe of ${config.vibeURL}. 🔎`)
    axios.get(config.vibeURL)
        .then((response) => {
            if (response.status = 200) {
                log(`Got good vibes. 👌`);
                process.exit(0);
            }
            log("Got a vibe, not sure if it's a good one. 😰");
            return vibeRefresh();  
        })
        .catch(error => {
            log(`Bummer, vibe check failed (see below). 😥`)
            log(error);
            vibeRefresh();
        })
}

function vibeRefresh() {
    log(`Refreshing the vibe of droplet ${config.droplet}. 🌊`)
    ocean.droplets.reboot(config.droplet, (error) => {
        if (error) {
            log(`Bummer, vibe refresh failed (see below). 😥`)
            log(error);
            process.exit(1);
        }
        log(`Good vibes inbound. 👌`);
        process.exit(0);
    })
}

function log(message) {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    console.log(`[${hour}:${min}] ${message}`)
}

vibeCheck();