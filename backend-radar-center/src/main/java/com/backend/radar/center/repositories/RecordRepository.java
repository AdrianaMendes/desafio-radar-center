package com.backend.radar.center.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.radar.center.models.entities.RecordEntity;

public interface RecordRepository extends JpaRepository<RecordEntity, Long> {
	List<RecordEntity> findByLicensePlate(String licensePlate);
}
