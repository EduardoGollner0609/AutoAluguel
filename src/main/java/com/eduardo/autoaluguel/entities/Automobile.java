package com.eduardo.autoaluguel.entities;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_automobile")
public class Automobile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String placa;
	@Column(name = "model_year")
	private Integer year;
	private String color;
	private Long km;
	private Double valuePerDay;

	public Automobile() {
	}

	public Automobile(Long id, String placa, Integer year, String color, Long km, Double valuePerDay) {
		super();
		this.id = id;
		this.placa = placa;
		this.year = year;
		this.color = color;
		this.km = km;
		this.valuePerDay = valuePerDay;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
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

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Automobile other = (Automobile) obj;
		return Objects.equals(id, other.id);
	}

}
