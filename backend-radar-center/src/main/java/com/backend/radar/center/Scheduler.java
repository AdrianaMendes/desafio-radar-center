package com.backend.radar.center;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.backend.radar.center.services.RecordService;

@Component
@EnableScheduling
public class Scheduler {
	
	@Autowired
	private RecordService recordService;
		
	@Scheduled(fixedDelay = 3000)
	public void generateRecord() {
		this.recordService.generateRecord(); 
	}
}
