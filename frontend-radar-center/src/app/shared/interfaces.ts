export enum EVehicleClass {
    TRUCK, SUV, MOTORCYCLE, BUS, VAN, PICKUP, REFUSE, SCHOOL_BUS, TRUCK_TRACTOR
}

export interface IRecord {

}

export interface IRecordCreateDto {
    speed: number;
    licensePlate: string;
    time: Date;
    vehicleClass: EVehicleClass;
}