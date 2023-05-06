package com.backend.radar.center.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.radar.center.models.entities.RecordEntity;
import com.backend.radar.center.models.projections.CountVehicleClassProjection;

public interface RecordRepository extends JpaRepository<RecordEntity, Long> {
	List<RecordEntity> findByLicensePlate(String licensePlate);
	
	@Query(value = "SELECT vehicle_class as vehicleClass, COUNT(*) FROM records GROUP BY vehicle_class", nativeQuery = true)
	List<CountVehicleClassProjection> countAllByVehicleClass();

	@Query(value = "SELECT AVG(speed) FROM records", nativeQuery = true)
	Double averageSpeed();

	@Query(value = "SELECT AVG(speed) FROM records WHERE time BETWEEN((LOCALTIMESTAMP(0) - INTERVAL '1 minutes' * :t1)) and ((LOCALTIMESTAMP(0) - INTERVAL '1 minutes' * :t2))", nativeQuery = true)
	Double averageSpeedInterval(Integer t1, Integer t2);
}
