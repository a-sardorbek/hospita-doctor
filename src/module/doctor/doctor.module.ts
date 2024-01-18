import { Module } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorController } from "./doctor.controller";
import { PrismaService } from "client";

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService],
})
export class DoctorModule {

}