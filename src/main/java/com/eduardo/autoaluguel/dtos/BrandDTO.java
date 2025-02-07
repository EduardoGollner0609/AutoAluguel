package com.eduardo.autoaluguel.dtos;

import java.util.ArrayList;
import java.util.List;

public class BrandDTO {

	private Long id;
	private String name;
	private List<ModelDTO> models = new ArrayList<>();

	public BrandDTO() {
	}

	public BrandDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
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

	public List<ModelDTO> getModels() {
		return models;
	}

}
