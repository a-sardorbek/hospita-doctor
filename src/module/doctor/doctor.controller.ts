import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { ApiBody, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CreateDoctorDto, UpdateDoctorDto } from "./dtos";
import { DoctorResponce } from "./types";
import { DoctorCreate, DoctorUpdate, NotFoundResponce, RetrieveDoctor } from "swagger";

@ApiTags('Doctor Service')
@Controller({
  path: 'api/v1/doctor',
  version: '1',
})
@Controller()
export class DoctorController {

    #_doctorService: DoctorService

    constructor(doctorService: DoctorService){
      this.#_doctorService = doctorService;
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    @ApiBody({ type: DoctorCreate})
    @ApiOkResponse({ type: RetrieveDoctor, description: 'Successfuly updated' })
    async createUser(@Body() payload: CreateDoctorDto): Promise<DoctorResponce>{
        console.log(payload)
        return await this.#_doctorService.createDoctor(payload)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put('/update')
    @ApiBody({ type: DoctorUpdate})
    @ApiNoContentResponse({ description: 'Successfuly updated' })
    async updateUser(@Body() payload: UpdateDoctorDto): Promise<void>{
        await this.#_doctorService.updateDoctor(payload)
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    @ApiOkResponse({ type: RetrieveDoctor, description: 'Doctor by id' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async retrieveUser(@Param('id') id: string): Promise<DoctorResponce> {
        return await this.#_doctorService.retrieveById({
          id: id
        })
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    @ApiNoContentResponse({ description: 'Successfuly deleted' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async deleteUser(@Param('id') id: string): Promise<void>{
        await this.#_doctorService.deleteUser({
          id: id
        })
    }
}