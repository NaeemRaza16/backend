const express = require("express");
const app = express();
const port = 4000;

require("dotenv").config();

const githubData = {
  login: "NaeemRaza16",
  id: 110819812,
  node_id: "U_kgDOBpr55A",
  avatar_url: "https://avatars.githubusercontent.com/u/110819812?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/NaeemRaza16",
  html_url: "https://github.com/NaeemRaza16",
  followers_url: "https://api.github.com/users/NaeemRaza16/followers",
  following_url:
    "https://api.github.com/users/NaeemRaza16/following{/other_user}",
  gists_url: "https://api.github.com/users/NaeemRaza16/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/NaeemRaza16/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/NaeemRaza16/subscriptions",
  organizations_url: "https://api.github.com/users/NaeemRaza16/orgs",
  repos_url: "https://api.github.com/users/NaeemRaza16/repos",
  events_url: "https://api.github.com/users/NaeemRaza16/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/NaeemRaza16/received_events",
  type: "User",
  site_admin: false,
  name: "Naeem Raza",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 3,
  following: 3,
  created_at: "2022-08-08T09:43:08Z",
  updated_at: "2024-04-17T04:28:01Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Muhammad Naeem Raza");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at muhammadnaeemraza.com</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Ifra Shamim</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
