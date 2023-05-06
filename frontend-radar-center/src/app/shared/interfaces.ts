export enum EVehicleClass {
    TRUCK = 'TRUCK', SUV = 'SUV', MOTORCYCLE = 'MOTORCYCLE', BUS = 'BUS', CAR = 'CAR'
}

export interface IRecord {
    id: number;
    speed: number;
    licensePlate: string;
    time: Date;
    vehicleClass: EVehicleClass;
}

export interface IRecordCreateDto {
    speed: number;
    licensePlate: string;
    time: Date;
    vehicleClass: EVehicleClass;
}

export interface IDashboard {
    countTotalRecords: number;
    averageSpeed: number;
    averageSpeedLast10Min: number[];
    countVehicleClass: ICountVehicleClass[];
}

export interface ICountVehicleClass {
    count: number;
    vehicleClass: EVehicleClass;
}
