const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port;

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
