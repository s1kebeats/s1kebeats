/*
  Warnings:

  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `image` on table `Beat` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- DropIndex
DROP INDEX "User_profileId_key";

-- AlterTable
ALTER TABLE "Beat" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT '';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileId",
ADD COLUMN     "about" VARCHAR(255),
ADD COLUMN     "displayedName" VARCHAR(63),
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
