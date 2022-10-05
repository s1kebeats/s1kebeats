import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// beats retrieval
export const findBeatById = (id: number) => prisma.beat.findUnique({
  where: { id },
  select: {
    id: true,
    name: true,
    bpm: true,
    createdAt: true,
    downloads: true,
    plays: true,
    image: true,
    mp3: true,
    wavePrice: true,
    stemsPrice: true,
    likes: true,
    comments: true,
    tags: true,
    author: {
      select: {
        username: true,
        displayedName: true,
        image: true
      }
    }
  }
})
export const findBeats = (sort: string, { tags, name, bpm }) => (
  prisma.beat.findMany({
    orderBy: { [sort]: 'desc' },
    where: {
      tags: {
        some: {
          id: {
            in: tags
          }
        }
      },
      name: {
        contains: name,
        mode: 'insensitive'
      },
      bpm: { equals: bpm }
    },
    select: {
      id: true,
      name: true,
      bpm: true,
      author: {
        select: {
          username: true,
          displayedName: true
        }
      },
      plays: true,
      image: true,
      mp3: true,
      wavePrice: true
    }
  })
)
export const allBeats = (sort: string) => (prisma.beat.findMany({
  orderBy: {
    [sort]: 'desc'
  },
  select: {
    id: true,
    name: true,
    bpm: true,
    author: {
      select: {
        username: true,
        displayedName: true
      }
    },
    plays: true,
    image: true,
    mp3: true,
    wavePrice: true
  }
}))
// create new beat
export const createBeat = beat => prisma.beat.create({ data: beat })
