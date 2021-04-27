# Vibe Check

This is an example project. The goal is to automate the reboot of a digitalocean droplet whenever a site is down. It uses axios and a digitalocean wrapper to do so.

It's intended for the script to be run via cron at whatever interval works best, be it hourly, daily, or otherwise.

The secrets are pulled from `config.json` and are as follows:

Secret | Description
------ | -----------
vibeURL | The URL for the script to check
droplet | The ID of the droplet to be rebooted
personalAccessToken | The DO API Personal Access Token for your account 

It writes it's logs to stdout so pipe/redirect that to a file or program of your choosing.