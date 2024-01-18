import { EntityStatus, HospitalType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { HospitalCreateRequest } from "../types";

export class CreateHospitalDto implements HospitalCreateRequest {
    @IsUUID(4)
    @IsNotEmpty()
    userId: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    address: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HospitalType)
    @IsOptional()
    type?: HospitalType;
}