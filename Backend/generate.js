// generateKey.js
const crypto = require('crypto');

// Generate a random 64-byte hexadecimal string for the JWT secret
const jwtSecret = crypto.randomBytes(64).toString('hex');

// Output the generated JWT secret key
console.log(`Your generated JWT secret key: ${jwtSecret}`);
