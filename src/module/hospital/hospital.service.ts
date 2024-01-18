import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "client/prisma/prisma.service";
import { HospitalCreateRequest, HospitalIdRequest, HospitalResponce, HospitalUpdateRequest } from "./types";

@Injectable()
export class HospitalService {

 readonly #_prisma: PrismaService

 constructor(prisma: PrismaService) {
    this.#_prisma = prisma
 }

 async createHospital(data: HospitalCreateRequest): Promise<HospitalResponce> {
   const hospital = await this.#_prisma.hospital.create({
      data:{
         title: data.title,
         description: data.description,
         address: data.address,
         status: data.status,
         type: data.type,
      },
      select: {
         id: true,
         title: true,
         address: true,
         description: true,
         status: true,
         type: true,
      }
    })

    return {
      id: hospital.id,
      title: hospital.title,
      address: hospital.address,
      description: hospital.description,
      status: hospital.status,
      type: hospital.type
   }
 }

 async updateHospital(data: HospitalUpdateRequest): Promise<void> {
   await this.#_hospitalExist(data.id)
   await this.#_prisma.hospital.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: {
         title: data.title,
         description: data.description,
         address: data.address,
         status: data.status,
         type: data.type,
      }
   })
 }

 async retrieveByIdHospital(data: HospitalIdRequest): Promise<HospitalResponce> {
   const hospital = await this.#_prisma.hospital.findFirst({
      where: {
         id: data.id,
         deletedAt: null,
      },
      select: {
         id: true,
         title: true,
         address: true,
         description: true,
         status: true,
         type: true,
      }
   })

   if(!hospital) {
      throw new HttpException('Hospital not found', HttpStatus.NOT_FOUND);
   }
   return {
      id: hospital.id,
      title: hospital.title,
      address: hospital.address,
      description: hospital.description,
      status: hospital.status,
      type: hospital.type
   }
 }

 async deleteHospital(data: HospitalIdRequest): Promise<void> {
     await this.#_hospitalExist(data.id)
     await this.#_prisma.hospital.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: { deletedAt: new Date() },
   })

 }

async #_hospitalExist(id: string): Promise<void> {
   const houseExist = await this.#_prisma.hospital.findFirst({
   where: {
      id: id,
      deletedAt: null
   },
   select:{
      id: true
   }
   })

   if(!houseExist){
     throw new HttpException('House not found', HttpStatus.NOT_FOUND);
   }
  }

}