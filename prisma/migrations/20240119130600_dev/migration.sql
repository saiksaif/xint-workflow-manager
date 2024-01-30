/*
  Warnings:

  - Added the required column `code` to the `PatnersModels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatnersModels" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "YakeenDataTwo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nid" TEXT NOT NULL,
    "licexpiry" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "YakeenDataTwo_pkey" PRIMARY KEY ("id")
);
