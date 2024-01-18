import { EntityStatus, HospitalType } from "@prisma/client";

export declare interface HospitalCreateRequest {
    title: string;
    description: string;
    address: string;
    status?: EntityStatus;
    type?: HospitalType
}

export declare interface HospitalUpdateRequest {
    id: string
    title?: string;
    description?: string;
    address?: string;
    status?: EntityStatus;
    type?: HospitalType
}

export declare interface HospitalIdRequest {
    id: string
}

export declare interface RetrieveHospitalListRequest {
    title?: string;
    status?: EntityStatus;
    type?: HospitalType
    pageSize?: number
    pageNumber?: number
}

export declare interface HospitalResponce {
    id: string;
    title: string;
    address: string;
    description: string;
    status: string;
    type: string;
}