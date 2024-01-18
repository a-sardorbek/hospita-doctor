import { IsNotEmpty, IsUUID } from "class-validator";
import { HospitalIdRequest } from "../types";

export class DeleteHospitalDto implements HospitalIdRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string
}