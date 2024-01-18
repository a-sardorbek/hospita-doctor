import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Type } from 'class-transformer'
import { EntityStatus, HospitalType } from "@prisma/client";
import { RetrieveHospitalListRequest } from "../types";

export class RetrieveHospitalListDto implements RetrieveHospitalListRequest {

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HospitalType)
    @IsOptional()
    type?: HospitalType;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    title?: string;

    @IsNumber({
     allowNaN: false,
     allowInfinity: false,
     maxDecimalPlaces: 0,
    })
    @Type(() => Number)
    @IsOptional()
    pageSize?: number;

    
    @IsNumber({
     allowNaN: false,
     allowInfinity: false,
     maxDecimalPlaces: 0,
    })
    @Type(() => Number)
    @IsOptional()
    pageNumber?: number;
}