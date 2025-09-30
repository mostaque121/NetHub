/*
  Warnings:

  - You are about to drop the `FtpLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IpTvLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "linkType" AS ENUM ('TV', 'FTP');

-- DropTable
DROP TABLE "public"."FtpLink";

-- DropTable
DROP TABLE "public"."IpTvLink";

-- CreateTable
CREATE TABLE "ServerLink" (
    "id" TEXT NOT NULL,
    "type" "linkType" NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workingIn" TEXT[],

    CONSTRAINT "ServerLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerLink_url_key" ON "ServerLink"("url");
