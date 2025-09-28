-- CreateEnum
CREATE TYPE "public"."TaskStatus" AS ENUM ('new', 'active', 'completed', 'hold');

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "progress" SMALLINT NOT NULL DEFAULT 0,
    "status" "public"."TaskStatus" NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
