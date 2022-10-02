const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const findUserByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email,
        }
    })
}
const createUserByEmailAndPassword = (user) => {
    user.password = bcrypt.hashSync(user.password, 12);
    return prisma.user.create({
        data: { password: user.password, email: user.email }
    })
}
const findUserById = (id) => {
    return prisma.user.findUnique({
        where: { id }
    })
}

module.exports = {
    findUserByEmail,
    findUserById,
    createUserByEmailAndPassword
  };