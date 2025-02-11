package com.eduardo.autoaluguel.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.autoaluguel.dtos.LocationDTO;
import com.eduardo.autoaluguel.services.LocationService;

@RestController
@RequestMapping(value = "/locations")
public class LocationController {

	@Autowired
	private LocationService service;

	@PostMapping
	public ResponseEntity<Void> insert(@RequestBody LocationDTO locationDTO) {
		service.insert(locationDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(locationDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@GetMapping
	public ResponseEntity<Page<LocationDTO>> findAllPaged(Pageable pageable) {
		Page<LocationDTO> automobiles = service.findAllPaged(pageable);
		return ResponseEntity.ok(automobiles);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<LocationDTO> findById(@PathVariable Long id) {
		LocationDTO locationDTO = new LocationDTO();
		return ResponseEntity.ok(locationDTO);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<LocationDTO> update(@PathVariable Long id, @RequestBody LocationDTO locationDTO) {
		locationDTO = service.update(id, locationDTO);
		return ResponseEntity.ok(locationDTO);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
