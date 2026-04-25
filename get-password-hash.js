#!/usr/bin/env node
const bcrypt = require('bcryptjs')

const password = process.argv[2]

if (!password) {
  console.error('Usage: node get-password-hash.js <password>')
  console.error('Example: node get-password-hash.js admin123')
  process.exit(1)
}

const hash = bcrypt.hashSync(password, 11)
console.log(hash)
