import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// beats retrieval
export const findBeatById = (id: number) =>
  prisma.beat.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      bpm: true,
      description: true,
      createdAt: true,
      downloads: true,
      plays: true,
      image: true,
      mp3: true,
      wavePrice: true,
      stemsPrice: true,
      likes: true,
      tags: true,
      author: {
        select: {
          username: true,
          displayedName: true,
          image: true,
        },
      },
    },
  });
export const findBeats = (sort: string, { tags, q, bpm }) => {
  const queryArgs = {
    orderBy: { [sort]: "desc" },
    where: {},
    select: {
      id: true,
      name: true,
      bpm: true,
      author: {
        select: {
          username: true,
          displayedName: true,
        },
      },
      image: true,
      mp3: true,
      wavePrice: true,
    },
  };

  if (q) {
    queryArgs.where = {
      OR: [
        {
          name: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          author: {
            OR: [
              {
                username: {
                  contains: q,
                  mode: "insensitive",
                },
              },
              {
                displayedName: {
                  contains: q,
                  mode: "insensitive",
                },
              },
            ],
          },
        },
      ],
    };
  }
  if (tags.length) {
    queryArgs.where.tags = {
      some: {
        id: {
          in: tags,
        },
      },
    };
  }
  if (bpm) {
    queryArgs.where.bpm = {
      equals: bpm,
    };
  }

  return prisma.beat.findMany(queryArgs);
};

export const allBeats = (sort: string) =>
  prisma.beat.findMany({
    orderBy: {
      [sort]: "desc",
    },
    select: {
      id: true,
      name: true,
      bpm: true,
      author: {
        select: {
          username: true,
          displayedName: true,
        },
      },
      plays: true,
      image: true,
      mp3: true,
      wavePrice: true,
    },
  });
// create new beat
export const createBeat = (beat) => prisma.beat.create({ data: beat });
