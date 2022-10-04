import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// beats retrieval
export const findBeatById = (id: number) => prisma.beat.findUnique({where: {id}})
export const findBeatsByTags = (tagsIds: number[], sort: string) => (
    prisma.beat.findMany({
        orderBy: { [sort]: 'desc' },
        where: {
            tags: {

            }
        }
    })
)
export const findBeatsByName = (name: string, sort: string) => (
    prisma.beat.findMany({
        orderBy: { [sort]: 'desc' },
        where: {
            name: {

            } 
        }
    })
)
// create new beat
export const createBeat = (beat) => prisma.beat.create({data: beat})