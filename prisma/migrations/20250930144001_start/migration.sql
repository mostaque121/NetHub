-- CreateTable
CREATE TABLE "SpeedTest" (
    "id" TEXT NOT NULL,
    "isp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "download" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpeedTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FtpLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workingIn" TEXT[],

    CONSTRAINT "FtpLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IpTvLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workingIn" TEXT[],

    CONSTRAINT "IpTvLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FtpLink_url_key" ON "FtpLink"("url");

-- CreateIndex
CREATE UNIQUE INDEX "IpTvLink_url_key" ON "IpTvLink"("url");
