import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const findUserByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email,
        }
    })
}
export const createUserByEmailAndPassword = (user) => {
    user.password = bcrypt.hashSync(user.password, 12);
    return prisma.user.create({
        data: { password: user.password, email: user.email }
    })
}
export const findUserById = (id) => {
    return prisma.user.findUnique({
        where: { id }
    })
}