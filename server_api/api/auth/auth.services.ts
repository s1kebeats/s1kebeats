import hashToken from "~~/server_api/utils/hashToken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const addTokenToWhiteList = ({ jti, refreshToken, userId }) => {
    return prisma.refreshToken.create({
        data: {
            id: jti, 
            hashedToken: hashToken(refreshToken),
            userId,
        }
    })
}
export const findRefreshTokenById = (id) => {
    return prisma.refreshToken.findUnique({
        where: { id }
    })
}
export const deleteRefreshToken = (id) => {
    return prisma.refreshToken.update({
        where: { id },
        data: {
            revoked: true
        }
    })
}
export const revokeUserTokens = (userId) => {
    return prisma.refreshToken.updateMany({
        where: { userId },
        data: { revoked: true, }
    })
}