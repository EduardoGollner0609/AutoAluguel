package com.eduardo.autoaluguel.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.autoaluguel.dtos.BrandDTO;
import com.eduardo.autoaluguel.services.BrandService;

@RestController
@RequestMapping(value = "/brands")
public class BrandController {

	@Autowired
	private BrandService service;

	@PostMapping
	public ResponseEntity<Void> insert(@RequestBody BrandDTO brandDTO) {
		service.insert(brandDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(brandDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@GetMapping
	public ResponseEntity<List<BrandDTO>> findAll() {
		List<BrandDTO> brands = service.findAll();
		return ResponseEntity.ok(brands);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<BrandDTO> findById(Long id) {
		BrandDTO brand = service.findById(id);
		return ResponseEntity.ok(brand);
	}
}
