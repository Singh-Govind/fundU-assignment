const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", require("./router/user.router"));
app.use("/posts", require("./router/post.router"));
app.use("/comments", require("./router/comment.router"));

app.listen(8080, async () => {
  await dbConnect();
  console.log(`server started at 8080`);
});
