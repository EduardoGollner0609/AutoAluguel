package com.eduardo.autoaluguel.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.eduardo.autoaluguel.dtos.AutomobileDTO;
import com.eduardo.autoaluguel.services.AutomobileService;

@RestController
@RequestMapping(value = "/automobilies")
public class AutomobileController {

	@Autowired
	private AutomobileService service;

	@PostMapping
	public ResponseEntity<AutomobileDTO> insert(@RequestBody AutomobileDTO automobileDTO) {
		automobileDTO = service.insert(automobileDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(automobileDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(automobileDTO);
	}

	@GetMapping
	public ResponseEntity<List<AutomobileDTO>> findAll() {
		List<AutomobileDTO> automobiles = service.findAll();
		return ResponseEntity.ofNullable(automobiles);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<AutomobileDTO> findById(@PathVariable Long id) {
		AutomobileDTO automobileDTO = new AutomobileDTO();
		return ResponseEntity.ok(automobileDTO);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<AutomobileDTO> update(@PathVariable Long id, @RequestBody AutomobileDTO automobileDTO) {
		automobileDTO = service.update(id, automobileDTO);
		return ResponseEntity.ok(automobileDTO);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
