/*
  Warnings:

  - You are about to drop the `ResourceFilesOnBlogs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `house` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resource_file` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "hospital_type" AS ENUM ('private', 'public');

-- DropForeignKey
ALTER TABLE "ResourceFilesOnBlogs" DROP CONSTRAINT "ResourceFilesOnBlogs_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "ResourceFilesOnBlogs" DROP CONSTRAINT "ResourceFilesOnBlogs_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "house" DROP CONSTRAINT "house_user_id_fkey";

-- DropForeignKey
ALTER TABLE "resource_file" DROP CONSTRAINT "resource_file_house_id_fkey";

-- DropTable
DROP TABLE "ResourceFilesOnBlogs";

-- DropTable
DROP TABLE "blog";

-- DropTable
DROP TABLE "house";

-- DropTable
DROP TABLE "resource_file";

-- DropTable
DROP TABLE "user";

-- DropEnum
DROP TYPE "house_type";

-- DropEnum
DROP TYPE "user_status";

-- DropEnum
DROP TYPE "user_type";

-- CreateTable
CREATE TABLE "patient" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15),
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255),
    "status" "entity_status" NOT NULL DEFAULT 'inactive',
    "profession" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hospital" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "address" VARCHAR(255),
    "location" JSONB DEFAULT '{}',
    "status" "entity_status" NOT NULL DEFAULT 'inactive',
    "type" "hospital_type" NOT NULL DEFAULT 'private',
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorsOnHospitals" (
    "doctor_id" UUID NOT NULL,
    "hospital_id" UUID NOT NULL,

    CONSTRAINT "DoctorsOnHospitals_pkey" PRIMARY KEY ("doctor_id","hospital_id")
);

-- CreateTable
CREATE TABLE "PatientsOnHospitalsAndDoctors" (
    "patient_id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "hospital_id" UUID NOT NULL,

    CONSTRAINT "PatientsOnHospitalsAndDoctors_pkey" PRIMARY KEY ("patient_id","doctor_id","hospital_id")
);

-- AddForeignKey
ALTER TABLE "DoctorsOnHospitals" ADD CONSTRAINT "DoctorsOnHospitals_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorsOnHospitals" ADD CONSTRAINT "DoctorsOnHospitals_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientsOnHospitalsAndDoctors" ADD CONSTRAINT "PatientsOnHospitalsAndDoctors_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientsOnHospitalsAndDoctors" ADD CONSTRAINT "PatientsOnHospitalsAndDoctors_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientsOnHospitalsAndDoctors" ADD CONSTRAINT "PatientsOnHospitalsAndDoctors_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
