import { IsNotEmpty, IsUUID } from "class-validator";
import { HospitalIdRequest } from "../types";

export class RetrieveByIdHospitalDto implements HospitalIdRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string
}
