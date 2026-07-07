import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
const PORT = process.env.PORT || 10000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER RUNNING AT PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION ERROR:", error);
  });
