package com.backend.radar.center.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.radar.center.models.entities.RecordEntity;
import com.backend.radar.center.models.enums.VehicleClassEnum;
import com.backend.radar.center.repositories.RecordRepository;
import com.github.curiousoddman.rgxgen.RgxGen;

@Service
public class RecordService {
	@Autowired
	private RecordRepository recordRepository;
	private static final Logger logger = LoggerFactory.getLogger(RecordService.class);
	private static final RgxGen rgxGenLicensePlate = new RgxGen("[A-Z]{3}\\d[A-Z]\\d{2}");

	public void deleteById(Long id) {
		this.recordRepository.deleteById(id);
	}

	public Optional<RecordEntity> findById(Long id) {
		return this.recordRepository.findById(id);
	}

	public List<RecordEntity> findAll() {
		return this.recordRepository.findAll();
	}

	public void save(RecordEntity request) {
		this.recordRepository.save(request);
	}

	public void generateRecord() {
		RecordEntity record = new RecordEntity();

		record.setVehicleClass(VehicleClassEnum.randomVehicleClass());
		record.setLicensePlate(rgxGenLicensePlate.generate());
		record.setTime(new Date());
		record.setSpeed(Math.round((80D + (20D * new Random().nextDouble())) * 100D) / 100D);

		logger.info("Record created: " + this.recordRepository.save(record).toString());
	}
}
