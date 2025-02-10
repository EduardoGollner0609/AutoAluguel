package com.eduardo.autoaluguel.dtos;

import com.eduardo.autoaluguel.entities.Automobile;

public class AutomobileDTO {

	private Long id;
	private String imgUrl;
	private String plate;
	private Integer year;
	private String color;
	private Long km;
	private Double valuePerDay;
	private Boolean returned;
	private ModelDTO model;

	public AutomobileDTO() {
	}

	public AutomobileDTO(Long id, String imgUrl, String plate, Integer year, String color, Long km, Double valuePerDay,
			Boolean returned, ModelDTO model) {
		super();
		this.id = id;
		this.imgUrl = imgUrl;
		this.plate = plate;
		this.year = year;
		this.color = color;
		this.km = km;
		this.valuePerDay = valuePerDay;
		this.returned = returned;
		this.model = model;
	}

	public AutomobileDTO(Automobile automobile) {
		id = automobile.getId();
		imgUrl = automobile.getImgUrl();
		plate = automobile.getPlate();
		year = automobile.getYear();
		color = automobile.getColor();
		km = automobile.getKm();
		valuePerDay = automobile.getValuePerDay();
		returned = automobile.getReturned();
		model = new ModelDTO(automobile.getModel());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Boolean getReturned() {
		return returned;
	}

	public void setReturned(Boolean returned) {
		this.returned = returned;
	}

	public ModelDTO getModel() {
		return model;
	}

	public void setModel(ModelDTO model) {
		this.model = model;
	}

}
