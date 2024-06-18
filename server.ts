import connectDB from "./Utils/db";
import { app } from "./app";
import "dotenv/config";

const PORT = process.env.PORT;

//create server
app.listen(PORT, () => {
  console.log("Server is connected to " + PORT);
  connectDB()
});
