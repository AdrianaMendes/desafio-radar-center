package com.backend.radar.center.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.radar.center.services.RecordService;

@RestController
public class RecordController {
	@Autowired
	private RecordService recordService;
}
