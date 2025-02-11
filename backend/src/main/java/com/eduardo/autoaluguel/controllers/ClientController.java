package com.eduardo.autoaluguel.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.autoaluguel.dtos.ClientDTO;
import com.eduardo.autoaluguel.services.ClientService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/clients")
public class ClientController {

	@Autowired
	private ClientService service;

	@PostMapping
	public ResponseEntity<ClientDTO> insert(@RequestBody @Valid ClientDTO clientDTO) {
		clientDTO = service.insert(clientDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(clientDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(clientDTO);
	}

	@GetMapping(value = "/{cpf}")
	public ResponseEntity<ClientDTO> findByCpf(@PathVariable String cpf) {
		ClientDTO clientDTO = service.findByCpf(cpf);
		return ResponseEntity.ok(clientDTO);
	}
}
