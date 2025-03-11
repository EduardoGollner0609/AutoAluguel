package com.eduardo.autoaluguel.dtos;

import com.eduardo.autoaluguel.entities.Model;

import jakarta.validation.constraints.NotBlank;

public class ModelDTO {

	private Long id;
	@NotBlank(message = "Campo requerido")
	private String name;
	private BrandDTO brand;

	public ModelDTO() {
	}

	public ModelDTO(Long id, String name, BrandDTO brand) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
	}

	public ModelDTO(Model model) {
		id = model.getId();
		name = model.getName();
		brand = new BrandDTO(model.getBrand());
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

	public BrandDTO getBrand() {
		return brand;
	}

	public void setBrand(BrandDTO brand) {
		this.brand = brand;
	}

}
