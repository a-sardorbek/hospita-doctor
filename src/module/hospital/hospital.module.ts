import { Module } from "@nestjs/common";
import { PrismaService } from "client";
import { HospitalController } from "./hospital.controller";
import { HospitalService } from "./hospital.service";

@Module({
  controllers: [HospitalController],
  providers: [HospitalService, PrismaService],
})
export class HospitalModule {

}