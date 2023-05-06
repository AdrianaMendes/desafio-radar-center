import { NgModule } from '@angular/core';
import { VehicleClassPipe } from '@shared/pipes/vehicle-class.pipe';


@NgModule({
    declarations: [
        VehicleClassPipe
    ],
    exports: [
        VehicleClassPipe
    ],
})
export class PipesModule { }