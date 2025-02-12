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

	@Autowired
	private AutomobileService automobileService;

	// Create
	public void insert(LocationDTO locationDTO) {
		Location location = new Location();
		copyDtoToEntityToInsert(location, locationDTO);
		repository.save(location);
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
	@Transactional
	public LocationDTO update(Long id, LocationDTO locationDTO) {
		try {
			Location location = repository.getReferenceById(id);
			copyDtoToEntityToUpdate(location, locationDTO);
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
	private double calculateTotalRentalValue(Location location) {
		int days = calculateRentedDays(location.getRentalDate(), location.getReturnDate());
		return days * location.getAutomobile().getValuePerDay();
	}

	private void copyDtoToEntityToInsert(Location location, LocationDTO locationDTO) {
		location.setRentalDate(Instant.now());

		Automobile automobile = automobileService.updateRentStatus(locationDTO.getAutomobile().getId(), false);

		location.setAutomobile(automobile);

		Client client = new Client();
		client.setId(locationDTO.getClient().getId());
		location.setClient(client);

	}

	private void copyDtoToEntityToUpdate(Location location, LocationDTO locationDTO) {

		location.setReturnDate(Instant.now());

		automobileService.updateRentStatus(locationDTO.getAutomobile().getId(), true);

		double totalValue = calculateTotalRentalValue(location);

		location.setValue(totalValue);

	}
}
