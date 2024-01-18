import { EntityStatus } from "@prisma/client";

export declare interface DoctorCreateRequest {
    fullName: string;
    profession: string;
    contact: string;
    status?: EntityStatus;
}

export declare interface DoctorUpdateRequest {
    id: string
    fullName?: string;
    profession?: string;
    contact?: string;
    status?: EntityStatus;
}

export declare interface DoctorIdRequest {
    id: string
}

export declare interface RetrieveDoctorListRequest {
    userName?: string;
    status?: EntityStatus;
    pageSize?: number
    pageNumber?: number
}

export declare interface DoctorResponce {
    id: string;
    fullName: string;
    profession: string;
    contact: string;
    status: string;
}