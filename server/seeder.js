import mongoose from "mongoose";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { MockUserList } from "./data/users.js";
// bookingData

dotenv.config();

const prisma = new PrismaClient();
const mongoUrl = process.env.DATABASE_URL;
if (!mongoUrl) {
  throw new Error("MongoDB connection string is not defined.");
}

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) =>
  console.error("MongoDB connection error:", error)
);

const importData = async () => {
  try {
    await prisma.user.createMany({
      data: MockUserList,
    });
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Use Prisma to delete data
    await prisma.user.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error("Error destroying data:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
