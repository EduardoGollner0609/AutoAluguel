package com.eduardo.autoaluguel.dtos;

public class AutomobileDTO {

	private Long id;
	private String plate;
	private Integer year;
	private String color;
	private Long km;
	private Double valuePerDay;
	private Boolean returned;
	private ModelDTO model;

	public AutomobileDTO() {
	}

	public AutomobileDTO(Long id, String plate, Integer year, String color, Long km, Double valuePerDay,
			Boolean returned, ModelDTO model) {
		super();
		this.id = id;
		this.plate = plate;
		this.year = year;
		this.color = color;
		this.km = km;
		this.valuePerDay = valuePerDay;
		this.returned = returned;
		this.model = model;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
