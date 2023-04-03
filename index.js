require("dotenv").config();
const app = require("./app.js");
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`server run at http://localhost:${PORT}`);
});
