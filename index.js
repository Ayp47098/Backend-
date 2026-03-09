const dotenv=require("dotenv")

dotenv.config()
const express=require("express")

const app=express()
const port=3000
const githubData={
"login": "Ayp47098",
"id": 129740858,
"node_id": "U_kgDOB7uwOg",
"avatar_url": "https://avatars.githubusercontent.com/u/129740858?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/Ayp47098",
"html_url": "https://github.com/Ayp47098",
"followers_url": "https://api.github.com/users/Ayp47098/followers",
"following_url": "https://api.github.com/users/Ayp47098/following{/other_user}",
"gists_url": "https://api.github.com/users/Ayp47098/gists{/gist_id}",
"starred_url": "https://api.github.com/users/Ayp47098/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/Ayp47098/subscriptions",
"organizations_url": "https://api.github.com/users/Ayp47098/orgs",
"repos_url": "https://api.github.com/users/Ayp47098/repos",
"events_url": "https://api.github.com/users/Ayp47098/events{/privacy}",
"received_events_url": "https://api.github.com/users/Ayp47098/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Ayush Pandey",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "👋 Hi, I’m Aayush, a passionate developer who loves building clean code and efficient solution. ",
"twitter_username": null,
"public_repos": 43,
"public_gists": 0,
"followers": 11,
"following": 33,
"created_at": "2023-04-03T09:38:58Z",
"updated_at": "2026-03-07T11:24:31Z"
}

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/twitter",(req,res)=>{
    res.send("aayushdotcom")
})
app.get("/login",(req,res)=>{
    res.send("<h1> please login at our website</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("<h2> this is our youtube</h2>")
})
app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example port listening on port ${port}`);
    
})