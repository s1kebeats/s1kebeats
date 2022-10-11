import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findRelatedComments = (id: number) => (
    prisma.comment.findMany({
        where: {
            beatId: id,
        },
        include: {
            author: {
                select: {
                    username: true,
                    displayedName: true,
                    image: true,
                }
            }
        }
    })
)