import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = (user: {
  email: string;
  password: string;
  username: string;
}) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return prisma.user.create({
    data: {
      password: user.password,
      email: user.email,
      username: user.username,
    },
  });
};
// user retrieval
export const findUserByEmail = (email: string) =>
  prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      username: true,
      password: true,
      createdAt: true,
      displayedName: true,
      about: true,
      image: true,
    },
  });
export const findUserById = (id: string) =>
  prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      createdAt: true,
      displayedName: true,
      about: true,
      image: true,
    },
  });

export const findUserByUsername = (username: string) => {
  const user = prisma.user.findUnique({
    where: { username },
    select: {
      username: true,
      createdAt: true,
      displayedName: true,
      about: true,
      image: true,
      beats: {
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
          plays: true,
        },
      },
      youtubeLink: true,
      instagramLink: true,
      vkLink: true,
    },
  });
  return user;
};

export const allUsers = () =>
  prisma.user.findMany({
    select: {
      username: true,
      displayedName: true,
      image: true,
    },
  });

export const findUsers = (query?: string) =>
  prisma.user.findMany({
    where: {
      OR: [
        {
          username: {
            contains: query,
          },
        },
        {
          displayedName: {
            contains: query,
          },
        },
      ],
    },
    select: {
      username: true,
      displayedName: true,
      image: true,
    },
  });
