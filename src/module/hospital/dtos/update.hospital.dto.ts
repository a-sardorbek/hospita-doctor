import { EntityStatus, HospitalType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { HospitalUpdateRequest } from "../types";

export class UpdateHospitalDto implements HospitalUpdateRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    address?: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HospitalType)
    @IsOptional()
    type?: HospitalType;
}