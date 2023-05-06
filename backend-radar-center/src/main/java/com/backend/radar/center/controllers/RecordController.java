package com.backend.radar.center.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.radar.center.models.entities.RecordEntity;
import com.backend.radar.center.services.RecordService;

import io.swagger.annotations.Api;

@RestController
@Api(tags = "Record")
public class RecordController {
	@Autowired
	private RecordService recordService;

	@DeleteMapping(path = "delete/{id}")
	public ResponseEntity<Void> delete(@PathVariable final Long id) {
		this.recordService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping(path = "findById/{id}")
	public ResponseEntity<Optional<RecordEntity>> findById(@PathVariable final Long id) {
		return new ResponseEntity<>(this.recordService.findById(id), HttpStatus.OK);
	}

	@GetMapping(path = "findAll")
	public ResponseEntity<List<RecordEntity>> findAll() {
		return new ResponseEntity<>(this.recordService.findAll(), HttpStatus.OK);
	}

	@PostMapping(path = "save")
	public ResponseEntity<Void> save(@RequestBody final RecordEntity request) {
		this.recordService.save(request);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
