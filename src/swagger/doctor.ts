import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { DoctorCreateRequest, DoctorIdRequest, DoctorResponce, DoctorUpdateRequest } from "module/doctor/types";

export class DoctorCreate implements DoctorCreateRequest {

    @ApiProperty({
     example: 'title',
    })
    fullName: string;

    @ApiProperty({
     example: 'contact',
    })
    contact: string;

    @ApiProperty({
     example: 'profession',
    })
    profession: string;
    
    @ApiProperty({
    example: '',
    enum: $Enums.EntityStatus,
    })
    status?: $Enums.EntityStatus;

}

export class DoctorUpdate implements DoctorUpdateRequest {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiPropertyOptional({
        example: 'fullname'
    })
    fullName?: string;

    @ApiPropertyOptional({
        example: 'profession'
    })
    profession?: string;

    @ApiPropertyOptional({
        example: 'contact'
    })
    contact?: string;

    @ApiPropertyOptional({
        example: '',
        enum: $Enums.EntityStatus
    })
    status?: $Enums.EntityStatus;
    
}

export class DoctorById implements DoctorIdRequest {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;
}

export class RetrieveDoctor implements DoctorResponce {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiProperty({
        example: 'userName'
    })
    profession: string;

    @ApiProperty({
        example: 'fullName'
    })
    fullName: string;

    @ApiProperty({
        example: 'phone'
    })
    contact: string;

    @ApiProperty({
        example: '',
    })
    status: string;

}