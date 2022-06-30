import * as express from "express";
import * as bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  res.json({ data: { name: "The Aman", age: 21 } });
});
app.post("/user", (req, res) => {
  // sending request to a db with req.body
  console.log(req.body);
  res.send("user created successfully");
});
app.get("/:user", (req, res) => {
  res.json({
    data: "it's a request which isn't getting managed",
    param: req.params.user,
  });
});
app.get("/", (_, res) => {
  res.json({
    data: {
      users: [
        {
          name: "Aman",
          age: 21,
        },
        {
          name: "Khushi",
          age: 21,
        },
      ],
    },
  });

  app.get("*", (_, res) => res.send("file does't exist"));
});
app.listen(process.env.port || 80, () => console.log("Listening on default http port"));
