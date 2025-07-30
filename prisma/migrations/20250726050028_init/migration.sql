-- CreateTable
CREATE TABLE "Artikel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Artikel_pkey" PRIMARY KEY ("id")
);
