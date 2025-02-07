package com.eduardo.autoaluguel.dtos;

import com.eduardo.autoaluguel.entities.Model;

public class ModelDTO {

	private Long id;
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
