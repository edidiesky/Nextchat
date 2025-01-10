// import { Redis } from "@upstash/redis";
import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Created the Publisher and Subscriber
export const publisher = new Redis(process.env.IO_REDIS_URL);
export const subscriber = new Redis(process.env.IO_REDIS_URL);

// export const subscriber = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

