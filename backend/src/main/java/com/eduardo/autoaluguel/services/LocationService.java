package com.eduardo.autoaluguel.services;

import java.time.Duration;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.autoaluguel.dtos.LocationDTO;
import com.eduardo.autoaluguel.entities.Automobile;
import com.eduardo.autoaluguel.entities.Client;
import com.eduardo.autoaluguel.entities.Location;
import com.eduardo.autoaluguel.repositories.LocationRepository;
import com.eduardo.autoaluguel.services.exceptions.DatabaseException;
import com.eduardo.autoaluguel.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class LocationService {

	@Autowired
	private LocationRepository repository;

	// Create
	public LocationDTO insert(LocationDTO locationDTO) {
		Location location = new Location();
		copyDtoToEntity(location, locationDTO);
		return new LocationDTO(repository.save(location));
	}

	// Read(FindAll)
	@Transactional(readOnly = true)
	public Page<LocationDTO> findAllPaged(Pageable pageable) {
		Page<Location> locations = repository.findAllPaged(pageable);
		return locations.map(location -> new LocationDTO(location));
	}

	// Read(FindById)
	public LocationDTO findById(Long id) {
		Location location = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Locação não encontrada"));
		return new LocationDTO(location);
	}

	// Update
	public LocationDTO update(Long id, LocationDTO locationDTO) {
		try {
			Location location = repository.getReferenceById(id);
			copyDtoToEntity(location, locationDTO);
			return new LocationDTO(repository.save(location));
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Locação não encontrada");
		}
	}

	// Delete
	public void delete(Long id) {
		if (!repository.existsById(id)) {
			throw new ResourceNotFoundException("Locação não encontrada");
		}
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Não é possível apagar essa locação");
		}
	}

	// Calcular os dias de locação
	private int calculateRentedDays(Instant rentalDate, Instant returnDate) {
		long segundos = Duration.between(rentalDate, returnDate).getSeconds();
		int days = (int) (segundos / 86400);

		if (segundos % 86400 > 0) {
			days++;
		}

		return days;
	}

	// Calcular o valor total da locação
	private double calculateTotalRentalValue(LocationDTO locationDTO) {
		int days = calculateRentedDays(locationDTO.getRentalDate(), locationDTO.getReturnDate());
		return days * locationDTO.getAutomobile().getValuePerDay();
	}

	private void copyDtoToEntity(Location location, LocationDTO locationDTO) {
		location.setRentalDate(locationDTO.getRentalDate());
		location.setReturnDate(locationDTO.getReturnDate());

		Automobile automobile = new Automobile();
		automobile.setId(locationDTO.getId());
		location.setAutomobile(automobile);

		Client client = new Client();
		client.setId(locationDTO.getClient().getId());
		location.setClient(client);

		double totalValue = calculateTotalRentalValue(locationDTO);
		location.setValue(totalValue);
	}
}
