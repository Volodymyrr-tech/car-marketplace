const bcrypt = require('bcryptjs')

function passwordHasher(password) {
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(password, salt)
}

function comparePasswords(raw, hash) {
  return bcrypt.compareSync(raw, hash)
}

module.exports = {
  passwordHasher,
  comparePasswords,
}
