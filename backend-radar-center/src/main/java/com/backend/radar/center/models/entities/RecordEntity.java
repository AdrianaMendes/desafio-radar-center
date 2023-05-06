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

import com.backend.radar.center.models.enums.VehicleClassEnum;

import lombok.Data;

@Entity
@Data
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

	@Override
	public String toString() {
		return "Id: " + id + ", Speed: " + speed + ", License plate: " + licensePlate + ", Time: " + time
				+ ", Vehicle class: " + vehicleClass;
	}
}
