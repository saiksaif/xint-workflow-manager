-- CreateTable
CREATE TABLE "PatnersModels" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patnerName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "PatnersModels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YakeenData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nid" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "YakeenData_pkey" PRIMARY KEY ("id")
);
