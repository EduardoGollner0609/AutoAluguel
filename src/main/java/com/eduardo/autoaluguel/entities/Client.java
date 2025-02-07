package com.eduardo.autoaluguel.entities;

import java.time.LocalDate;

public class Client {

	private String nome;
	private String cpf;
	private String email;
	private String phone;
	private LocalDate birthdate;
	private String address;

	public Client() {
	}

	public Client(String nome, String cpf, String email, String phone, LocalDate birthdate, String address) {
		super();
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.phone = phone;
		this.birthdate = birthdate;
		this.address = address;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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
