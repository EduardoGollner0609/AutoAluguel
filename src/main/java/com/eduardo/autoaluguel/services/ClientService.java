package com.eduardo.autoaluguel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eduardo.autoaluguel.dtos.ClientDTO;
import com.eduardo.autoaluguel.entities.Client;
import com.eduardo.autoaluguel.repositories.ClientRepository;
import com.eduardo.autoaluguel.services.exceptions.ResourceNotFoundException;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	// Create
	public ClientDTO insert(ClientDTO clientDTO) {
		Client client = new Client();
		copyDtoToEntity(client, clientDTO);
		return new ClientDTO(repository.save(client));
	}

	// Read (FindByCpf)
	public ClientDTO findByCpf(String cpf) {
		Client client = repository.findByCpf(cpf)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado"));
		return new ClientDTO(client);
	}

	private void copyDtoToEntity(Client client, ClientDTO clientDTO) {
		client.setName(clientDTO.getName());
		client.setCpf(clientDTO.getCpf());
		client.setAddress(clientDTO.getAddress());
		client.setBirthdate(clientDTO.getBirthdate());
		client.setPhone(clientDTO.getPhone());
		client.setEmail(clientDTO.getEmail());
	}
}
