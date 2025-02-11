package com.eduardo.autoaluguel.dtos;

import java.time.LocalDate;

import com.eduardo.autoaluguel.entities.Client;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;

public class ClientDTO {

	private Long id;
	@NotBlank(message = "Campo requerido")
	@Size(min = 5, max = 50, message = "O nome deve ter entre 5 a 50 caracteres")
	private String name;
	@NotBlank(message = "Campo requerido")
	private String cpf;
	@NotBlank(message = "Campo requerido")
	@Email(message = "Email inválido")
	private String email;
	@NotBlank(message = "Campo requerido")
	private String phone;
	@PastOrPresent
	private LocalDate birthdate;
	@NotBlank(message = "Campo requerido")
	@Size(min = 8, message = "Minimo de 8 caracteres")
	private String address;

	public ClientDTO() {
	}

	public ClientDTO(Long id, String name, String cpf, String email, String phone, LocalDate birthdate,
			String address) {
		super();
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.phone = phone;
		this.birthdate = birthdate;
		this.address = address;
	}

	public ClientDTO(Client client) {
		this.id = client.getId();
		this.name = client.getName();
		this.cpf = client.getCpf();
		this.email = client.getEmail();
		this.phone = client.getPhone();
		this.birthdate = client.getBirthdate();
		this.address = client.getAddress();
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
