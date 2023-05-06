package com.backend.radar.center.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.radar.center.models.entities.RecordEntity;

@Repository
public interface RecordRepository extends JpaRepository<RecordEntity, Long> {}
