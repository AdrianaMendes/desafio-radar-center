package com.backend.radar.center.models.enums;

import java.util.Random;

public enum VehicleClassEnum {	
	TRUCK, SUV, MOTORCYCLE, BUS, CAR;

	private static final Random random = new Random();

	public static Integer length() {
		return VehicleClassEnum.values().length;
	}

	/**
	 * Ordem de prioridade na geração da classe do veículo, MOTORCYLE > CAR, SUV > TRUCK > BUS
	 */
	public static VehicleClassEnum randomVehicleClass() {
		VehicleClassEnum[] vehicleClassValues = values();
		VehicleClassEnum vehicleClass = vehicleClassValues[random.nextInt(length())];
		
		if (vehicleClass == VehicleClassEnum.SUV || vehicleClass == VehicleClassEnum.CAR || vehicleClass == VehicleClassEnum.BUS || vehicleClass == VehicleClassEnum.TRUCK) {
			vehicleClass = vehicleClassValues[random.nextInt(length())];
		}
		
		if (vehicleClass == VehicleClassEnum.BUS || vehicleClass == VehicleClassEnum.TRUCK) {
			vehicleClass = vehicleClassValues[random.nextInt(length())];
		}
		
		if (vehicleClass == VehicleClassEnum.BUS) {
			vehicleClass = vehicleClassValues[random.nextInt(length())];
		}
		
		return vehicleClass;
	}
}
