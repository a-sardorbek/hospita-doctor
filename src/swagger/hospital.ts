import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { HospitalCreateRequest, HospitalResponce, HospitalUpdateRequest } from "module/hospital";

export class HospitalCreate implements HospitalCreateRequest {

    @ApiProperty({
     example: 'title',
    })
    title: string;

    @ApiProperty({
     example: 'description',
    })
    description: string;

    @ApiProperty({
     example: 'address',
    })
    address: string;
    
    @ApiProperty({
    example: '',
    enum: $Enums.EntityStatus,
    })
    status?: $Enums.EntityStatus;

    @ApiProperty({
    example: '',
    enum: $Enums.HospitalType,
    })
    type?: $Enums.HospitalType;
    
}

export class HospitalUpdate implements HospitalUpdateRequest {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiPropertyOptional({
        example: 'title'
    })
    title?: string;

    @ApiPropertyOptional({
        example: 'description'
    })
    description?: string;

    @ApiPropertyOptional({
        example: 'address'
    })
    address?: string;

    @ApiPropertyOptional({
        example: '',
        enum: $Enums.EntityStatus
    })
    status?: $Enums.EntityStatus;

    @ApiPropertyOptional({
        example: '',
        enum: $Enums.HospitalType
    })
    type?: $Enums.HospitalType;
    
}

export class HospitalById implements HospitalById {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;
}

export class RetrieveHospital implements HospitalResponce {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiProperty({
        example: 'title'
    })
    title: string;

    @ApiProperty({
        example: 'description'
    })
    description: string;

    @ApiProperty({
        example: 'address'
    })
    address: string;

    @ApiProperty({
        example: '',
        enum: $Enums.EntityStatus
    })
    status: string;

    @ApiProperty({
        example: '',
        enum: $Enums.HospitalType
    })
    type: string;

}

export class NotFoundResponce {
  @ApiProperty({
     example: '404',
     type: Number
  })
  statusCode: number

   @ApiProperty({
     example: 'not found'
  })
  message: string
}