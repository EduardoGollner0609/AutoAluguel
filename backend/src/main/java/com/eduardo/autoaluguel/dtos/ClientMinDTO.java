package com.eduardo.autoaluguel.dtos;

import com.eduardo.autoaluguel.entities.Client;

public class ClientMinDTO {

	private Long id;
	private String name;
	private String cpf;

	public ClientMinDTO() {
	}

	public ClientMinDTO(Long id, String name, String cpf) {
		super();
		this.id = id;
		this.name = name;
		this.cpf = cpf;
	}

	public ClientMinDTO(Client client) {
		id = client.getId();
		name = client.getName();
		cpf = client.getCpf();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

}
