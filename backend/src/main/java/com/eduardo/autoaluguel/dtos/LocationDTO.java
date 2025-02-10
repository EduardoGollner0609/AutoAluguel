package com.eduardo.autoaluguel.dtos;

import java.time.Instant;

import com.eduardo.autoaluguel.entities.Location;

public class LocationDTO {

	private Long id;
	private Instant rentalDate;
	private Instant returnDate;
	private Double value;
	private ClientMinDTO client;
	private AutomobileDTO automobile;

	public LocationDTO() {
	}

	public LocationDTO(Long id, Instant rentalDate, Instant returnDate, Double value, ClientMinDTO client,
			AutomobileDTO automobile) {
		super();
		this.id = id;
		this.rentalDate = rentalDate;
		this.returnDate = returnDate;
		this.value = value;
		this.client = client;
		this.automobile = automobile;
	}

	public LocationDTO(Location location) {
		id = location.getId();
		rentalDate = location.getRentalDate();
		returnDate = location.getReturnDate();
		value = location.getValue();
		client = new ClientMinDTO(location.getClient());
		automobile = new AutomobileDTO(location.getAutomobile());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getRentalDate() {
		return rentalDate;
	}

	public void setRentalDate(Instant rentalDate) {
		this.rentalDate = rentalDate;
	}

	public Instant getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Instant returnDate) {
		this.returnDate = returnDate;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public ClientMinDTO getClient() {
		return client;
	}

	public void setClient(ClientMinDTO client) {
		this.client = client;
	}

	public AutomobileDTO getAutomobile() {
		return automobile;
	}

	public void setAutomobile(AutomobileDTO automobile) {
		this.automobile = automobile;
	}

}
