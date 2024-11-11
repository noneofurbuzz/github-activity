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
        axios.get(`https://api.github.com/users/${username}/events`)
        .then(response => {
            for(let i = 0;i < response.data.length;i++){
                if (response.data[i].type == "IssuesEvent"){
                    console.log(`- ${response.data[i].payload.action} an issue in ${response.data[i].repo.name}`)
                }
                else if (response.data[i].type == "CommitCommentEvent"){
                    console.log(`- commented on a commit in  ${response.data[i].repo.name}`) 
                    
                }
                else if (response.data[i].type == "CreateEvent"){
                    console.log(`- created a ${response.data[i].payload.ref_type} in the ${response.data[i].payload.master_branch} branch of ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "DeleteEvent"){
                    console.log(`- deleted a ${response.data[i].payload.ref_type} in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "ForkEvent"){
                    console.log(`- forked ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "GollumEvent"){
                    console.log(`- updated wiki page in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "IssueCommentEvent"){
                    console.log(`- ${response.data[i].payload.action} a comment on an issue in ${response.data[i].repo.name}`) 
                    
                }
                else if (response.data[i].type == "MemberEvent"){
                    console.log(`- ${response.data[i].payload.action} a collaborator to ${response.data[i].repo.name}`) 
                    
                }
                else if (response.data[i].type == "PublicEvent"){
                    console.log(`- made ${response.data[i].repo.name} public`) 
                }
                else if (response.data[i].type == "PullRequestEvent"){
                    console.log(`- ${response.data[i].payload.action} a pull request in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "PullRequestReviewEvent"){
                    console.log(`- ${response.data[i].payload.action} a pull request review in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "PullRequestReviewCommentEvent"){
                    console.log(`- commented on a pull request review in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "PullRequestReviewThreadEvent"){
                    console.log(`- ${response.data[i].payload.action} a comment thread on a pull request in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "PushEvent"){
                    console.log(`- pushed ${response.data[i].payload.size} ${response.data[i].payload.size > 1 ? "commits":"commit"} to ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "ReleaseEvent"){
                    console.log(`- ${response.data[i].payload.action} a release in ${response.data[i].repo.name}`) 
                }
                else if (response.data[i].type == "WatchEvent"){
                    console.log(`- starred ${response.data[i].repo.name}`) 
                }
            }
        })
        .catch(error => {
            console.error(error)
        })
    })
program.parse(process.argv)