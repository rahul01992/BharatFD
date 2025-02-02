const { createClient } = require("redis");
require("dotenv").config();

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    reconnectStrategy: (retries) => {
      console.log(`🔄 Redis reconnect attempt #${retries}`);
      return Math.min(retries * 100, 3000); // Exponential backoff (max 3 sec)
    },
  },
});

redisClient.on("error", (err) => console.error("❌ Redis Client Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected Successfully"));
redisClient.on("reconnecting", () => console.log("🔄 Redis Reconnecting..."));
redisClient.on("end", () => console.log("⚠️ Redis Disconnected"));

const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    console.error("❌ Redis Connection Failed:", error);
  }
};

module.exports = { redisClient, connectRedis };
