package com.eduardo.autoaluguel.dtos;

import com.eduardo.autoaluguel.entities.Brand;

public class BrandDTO {

	private Long id;
	private String name;

	public BrandDTO() {
	}

	public BrandDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public BrandDTO(Brand brand) {
		id = brand.getId();
		name = brand.getName();
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

}
