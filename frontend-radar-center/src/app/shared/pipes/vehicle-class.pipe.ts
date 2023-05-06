import { Pipe, PipeTransform } from '@angular/core';
import { EVehicleClass } from '@shared/interfaces';

@Pipe({ name: 'vehicleClassPipe' })
export class VehicleClassPipe implements PipeTransform {
    transform(vehicleClass: EVehicleClass): string | EVehicleClass {
        switch (vehicleClass) {
            default:
                return vehicleClass;
        }
    }
}