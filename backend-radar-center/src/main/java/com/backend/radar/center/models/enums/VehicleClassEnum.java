package com.backend.radar.center.models.enums;

import java.util.Random;

public enum VehicleClassEnum {
	TRUCK, SUV, MOTORCYCLE, BUS, VAN, PICKUP, REFUSE, SCHOOL_BUS, TRUCK_TRACTOR;

	private static final Random random = new Random();

	public static Integer length() {
		return VehicleClassEnum.values().length;
	}

	public static VehicleClassEnum randomVehicleClass() {
		VehicleClassEnum[] vehicleClass = values();
		return vehicleClass[random.nextInt(length())];
	}
}
