import mongoose from "mongoose";
import app from "./app";
import { config } from "./config/config";

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception:", error);
});

const bootstrap = async () => {
  try {
    mongoose.connect(config.database_url as string);
    console.log("😎😋😎 database connection established successfully ✅✅✅");
    app.listen(Number(config.port || 5000), () =>
      console.log("server listening on port ", Number(config.port || 5000))
    );
  } catch (err) {
    console.log("😡😡🥵 Error: ", err);
  }
};

process.on("unhandledRejection", () => {
  console.log("Unhandled rejection");
});
process.on("SIGTERM", () => {
  console.log("Sigterm received");
});
bootstrap();
