/*
  Warnings:

  - You are about to drop the column `about` on the `Beat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Beat" DROP COLUMN "about",
ADD COLUMN     "description" TEXT;
