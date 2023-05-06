package com.backend.radar.center.models.dtos;

import java.util.List;

import com.backend.radar.center.models.projections.CountVehicleClassProjection;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DashboardDto {
	private Long countTotalRecords;
	private Double averageSpeed;
	private List<Double> averageSpeedLast10Min;
	private List<CountVehicleClassProjection> countVehicleClass;
}
