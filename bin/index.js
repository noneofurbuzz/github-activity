#!/usr/bin/env node
const {Command} = require('commander')
const program = new Command()
const axios = require('axios')
program
    .name('github-activity')
    .description('CLI to fetch the recent activity of a GitHub user and display it in the terminal')
    .version('0.1.0')
program
    .argument('<github-username>')
    .action((username) => {
        console.log(`Your username is ${username}`)
        axios.get(`https://api.github.com/users/${username}/events`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error while fetching data')
        })
    })
program.parse(process.argv)