export enum EVehicleClass {
    TRUCK, SUV, MOTORCYCLE, BUS, VAN, PICKUP, REFUSE, SCHOOL_BUS, TRUCK_TRACTOR
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
    countTotalRecords:     number;
    averageSpeed:          number;
    averageSpeedLast10Min: (number | null)[];
    countVehicleClass:     ICountVehicleClass[];
}

export interface ICountVehicleClass {
    count:        number;
    vehicleClass: EVehicleClass;
}
