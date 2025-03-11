package com.eduardo.autoaluguel.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class AutomobileInsertDTO {

	@NotBlank(message = "Campo requerido")
	@Size(min = 10, message = "Minimo de 10 caracteres")
	private String imgUrl;
	@NotBlank(message = "Campo requerido")
	private String plate;
	@NotBlank(message = "Campo requerido")
	private Integer year;
	@NotBlank(message = "Campo requerido")
	private String color;
	@NotBlank(message = "Campo requerido")
	private Long km;
	@NotBlank(message = "Campo requerido")
	private Double valuePerDay;
	@NotNull(message = "Deve ter um modelo")
	private ModelDTO model;
	@NotNull(message = "Deve ter uma marca")
	private BrandDTO brand;

	public AutomobileInsertDTO() {
	}

	public AutomobileInsertDTO(String imgUrl, String plate, Integer year, String color, Long km, Double valuePerDay,
			ModelDTO model, BrandDTO brand) {
		this.imgUrl = imgUrl;
		this.plate = plate;
		this.year = year;
		this.color = color;
		this.km = km;
		this.valuePerDay = valuePerDay;
		this.model = model;
		this.brand = brand;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getPlate() {
		return plate;
	}

	public void setPlate(String plate) {
		this.plate = plate;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Long getKm() {
		return km;
	}

	public void setKm(Long km) {
		this.km = km;
	}

	public Double getValuePerDay() {
		return valuePerDay;
	}

	public void setValuePerDay(Double valuePerDay) {
		this.valuePerDay = valuePerDay;
	}

	public ModelDTO getModel() {
		return model;
	}

	public void setModel(ModelDTO model) {
		this.model = model;
	}

	public BrandDTO getBrand() {
		return brand;
	}

	public void setBrand(BrandDTO brand) {
		this.brand = brand;
	}

}
