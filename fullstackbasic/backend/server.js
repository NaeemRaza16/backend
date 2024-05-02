import express from "express";

const app = express();

app.use(express.static('dist'))

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "1st joke",
      description: "description 1",
    },
    {
      id: 2,
      joke: "2nd joke",
      description: "description 2",
    },
    {
      id: 3,
      joke: "3rd joke",
      description: "description 3",
    },
    {
      id: 4,
      joke: "4th joke",
      description: "description 4",
    },
    {
      id: 5,
      joke: "5th joke",
      description: "description 5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
