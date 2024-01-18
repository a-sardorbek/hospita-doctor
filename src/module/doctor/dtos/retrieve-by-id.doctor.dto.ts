import { IsNotEmpty, IsUUID } from "class-validator";
import { DoctorIdRequest } from "../types";

export class RetrieveByIdDoctorDto implements DoctorIdRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string
}
