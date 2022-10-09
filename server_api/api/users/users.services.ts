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
export const findUserByUsername = (username: string) =>
  prisma.user.findUnique({
    where: { username },
    select: {
      username: true,
      createdAt: true,
      displayedName: true,
      about: true,
      image: true,
      beats: true,
    },
});
export const allUsers = () => (
  prisma.user.findMany({
    select: {
      username: true,
      displayedName: true,
      image: true,
    }
  })
)

