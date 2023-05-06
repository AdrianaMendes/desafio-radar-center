package com.backend.radar.center.models.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.backend.radar.center.models.dtos.RecordCreateDto;
import com.backend.radar.center.models.enums.VehicleClassEnum;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "records")
public class RecordEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(columnDefinition = "DECIMAL(4,2)")
	private Double speed;

	@Column(length = 7)
	private String licensePlate;

	@Column
	private Date time;

	@Enumerated(EnumType.STRING)
	private VehicleClassEnum vehicleClass;

	public RecordEntity(RecordCreateDto dto) {
		this.licensePlate = dto.getLicensePlate();
		this.speed = dto.getSpeed();
		this.time = dto.getTime();
		this.vehicleClass = dto.getVehicleClass();
	}

	@Override
	public String toString() {
		return "Id: " + id + ", Speed: " + speed + "km/h, License plate: " + licensePlate + ", Time: " + time
				+ ", Vehicle class: " + vehicleClass;
	}
}
