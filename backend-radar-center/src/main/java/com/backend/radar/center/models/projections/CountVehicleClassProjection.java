package com.backend.radar.center.models.projections;

import com.backend.radar.center.models.enums.VehicleClassEnum;

public interface CountVehicleClassProjection {
	Long getCount();
	VehicleClassEnum getVehicleClass();
}
