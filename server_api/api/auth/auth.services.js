const { hashToken } = require('../../utils/hashToken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const addTokenToWhiteList = ({ jti, refreshToken, userId }) => {
    return prisma.refreshToken.create({
        data: {
            id: jti, 
            hashedToken: hashToken(refreshToken),
            userId,
        }
    })
}
const findRefreshTokenById = (id) => {
    return prisma.refreshToken.findUnique({
        where: { id }
    })
}
const deleteRefreshToken = (id) => {
    return prisma.refreshToken.update({
        where: { id },
        data: {
            revoked: true
        }
    })
}
const revokeUserTokens = (userId) => {
    return prisma.refreshToken.updateMany({
        where: { userId },
        data: { revoked: true, }
    })
}

module.exports = {
    addTokenToWhiteList,
    findRefreshTokenById,
    deleteRefreshToken,
    revokeUserTokens
};