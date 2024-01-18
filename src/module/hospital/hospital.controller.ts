import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import {
  ApiBody,
  ApiTags,
  ApiOkResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger'
import { HospitalService } from "./hospital.service";
import { CreateHospitalDto, UpdateHospitalDto } from "./dtos";
import { HospitalResponce } from "./types";
import { HospitalCreate, HospitalUpdate, NotFoundResponce, RetrieveHospital } from "swagger";

@ApiTags('Hospital Service')
@Controller({
  path: 'api/v1/hospital',
  version: '1',
})
export class HospitalController {

    #_hospitalService: HospitalService

    constructor(hospitalService: HospitalService){
      this.#_hospitalService = hospitalService;
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    @ApiBody({ type: HospitalCreate})
    @ApiOkResponse({ type: RetrieveHospital, description: 'Successfuly updated' })
    async createHouse(@Body() payload: CreateHospitalDto): Promise<HospitalResponce>{
        return await this.#_hospitalService.createHospital(payload)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put('/update')
    @ApiBody({ type: HospitalUpdate})
    @ApiNoContentResponse({ description: 'Successfuly updated' })
    @Put('/update')
    async updateHouse(@Body() payload: UpdateHospitalDto): Promise<void>{
        await this.#_hospitalService.updateHospital(payload)
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    @ApiOkResponse({ type: RetrieveHospital, description: 'Hospital by id' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async retrieveHouse(@Param('id') id: string): Promise<HospitalResponce> {
        return await this.#_hospitalService.retrieveByIdHospital({
          id: id
        })
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    @ApiNoContentResponse({ description: 'Successfuly deleted' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async deleteHouse(@Param('id') id: string): Promise<void>{
        await this.#_hospitalService.deleteHospital({
          id: id
        })
    }






    

}