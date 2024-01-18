import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "client";
import { DoctorCreateRequest, DoctorIdRequest, DoctorResponce, DoctorUpdateRequest } from "./types";

@Injectable()
export class DoctorService {

   readonly #_prisma: PrismaService


 constructor(prisma: PrismaService) {
    this.#_prisma = prisma
 }

 async createDoctor(data: DoctorCreateRequest): Promise<DoctorResponce> {
    console.log(data)
   const user = await this.#_prisma.doctor.create({
      data:{
         profession: data.profession,
         fullName: data.fullName,
         contact: data.contact,
         status: data.status,
      },
      select: {
       id: true,
       contact: true,
       fullName: true,
       profession: true,
       status: true,
      }
    })

    return {
      id: user.id,
      profession: user.profession,
      contact: user.contact,
      fullName: user.fullName,
      status: user.status,
   }

 }

 async updateDoctor(data: DoctorUpdateRequest): Promise<void> {
   await this.#_doctorExist(data.id)
   await this.#_prisma.doctor.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: {
         contact: data.contact,
         fullName: data.fullName,
         profession: data.profession,
         status: data.status,
      }
   })
 }

 async retrieveById(data: DoctorIdRequest): Promise<DoctorResponce> {
   const doctor = await this.#_prisma.doctor.findFirst({
      where: {
         id: data.id,
         deletedAt: null,
      },
      select: {
         id: true,
         contact: true,
         fullName: true,
         profession: true,
         status: true,
      }
   })

   if(!doctor) {
      throw new HttpException('Doctor not found', HttpStatus.NOT_FOUND);
   }
   return {
      id: doctor.id,
      profession: doctor.profession,
      contact: doctor.contact,
      fullName: doctor.fullName,
      status: doctor.status,
   }
 }

 async deleteUser(data: DoctorIdRequest): Promise<void> {
     await this.#_doctorExist(data.id)
     await this.#_prisma.doctor.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: { deletedAt: new Date() },
   })

 }

async #_doctorExist(id: string): Promise<void> {
   const doctor = await this.#_prisma.doctor.findFirst({
   where: {
      id: id,
      deletedAt: null
   },
   select:{
      id: true
   }
   })

   if(!doctor){
      throw new HttpException('Doctor not found', HttpStatus.NOT_FOUND);
   }
  }

}