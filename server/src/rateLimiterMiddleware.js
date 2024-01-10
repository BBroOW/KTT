// Import necessary modules
import { NextFunction, Request, Response } from "express";
import Redis from "ioredis";
import { RateLimiterRedis } from "rate-limiter-flexible";

// Create a Redis client
const redisClient = new Redis({
  enableOfflineQueue: false,
  host: "localhost", // Change to your Redis server address
  port: 6379,
});

// Create a rate limiter with Redis store
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "middleware",
  points: 5, // 5 requests
  duration: 5, // per 1 second by IP
  blockDuration: 60 * 60 * 24, // Block for 1 day, if 5 requests per second are exceeded
});

// Rate limiter middleware
const rateLimiterMiddleware = (
    req,
    res,
    next, 
) => {
  const ipAddress = req.ip || ""; // Ensure ipAddress is always a string

  
  rateLimiter
    .consume(ipAddress)
    .then(() => {
      next();
    })
    .catch(() => {
      console.log(`IP Request: ${ipAddress} - Too Many Requests`);
      res.status(429).send("Too Many Requests");
    });
};

export default rateLimiterMiddleware;