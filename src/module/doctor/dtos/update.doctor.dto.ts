import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { DoctorUpdateRequest } from "../types/doctor.type";
import { EntityStatus } from "@prisma/client";

export class UpdateDoctorDto implements DoctorUpdateRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    fullName?: string;

    @IsString()
    @IsOptional()
    userName?: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    phone?: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;
}