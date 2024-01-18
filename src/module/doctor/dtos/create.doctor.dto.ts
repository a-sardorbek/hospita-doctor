import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { DoctorCreateRequest } from "../types";
import { EntityStatus } from "@prisma/client";

export class CreateDoctorDto implements DoctorCreateRequest {
    
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    profession: string;

    @IsString()
    @IsNotEmpty()
    contact: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

}