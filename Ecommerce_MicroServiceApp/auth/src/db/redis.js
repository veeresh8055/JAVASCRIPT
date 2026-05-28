const {Redis} = require('ioredis')

const redis = new Redis({
    host: process.env.REDIS_HOST || process.env.RADIS_HOST,
    port:process.env.REDIS_PORT || 19257,
    password: process.env.REDIS_PASSWORD
})

redis.on("connect" , ()=>{
    console.log("connected to redis ")
});

redis.on("error", (error) => {
    console.error("redis connection error:", error.message);
});

module.exports = redis;
