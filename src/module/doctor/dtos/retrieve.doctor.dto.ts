import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Type } from 'class-transformer'
import { EntityStatus } from "@prisma/client";

export class RetrieveDoctorListDto implements RetrieveDoctorListDto {

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsString()
    @IsOptional()
    userName?: string;

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