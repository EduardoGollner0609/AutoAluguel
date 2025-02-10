package com.eduardo.autoaluguel.services;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.eduardo.autoaluguel.dtos.AutomobileDTO;
import com.eduardo.autoaluguel.entities.Automobile;
import com.eduardo.autoaluguel.entities.Model;
import com.eduardo.autoaluguel.repositories.AutomobileRepository;
import com.eduardo.autoaluguel.services.exceptions.DatabaseException;
import com.eduardo.autoaluguel.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AutomobileService {

	private AutomobileRepository repository;

	// Create
	public AutomobileDTO insert(AutomobileDTO automobileDTO) {
		Automobile automobile = new Automobile();
		copyDtoToEntity(automobile, automobileDTO);
		return new AutomobileDTO(repository.save(automobile));
	}

	// Read (FindAll)
	public List<AutomobileDTO> findAll() {
		List<Automobile> automobiles = repository.findAllOrderByReturned();
		return automobiles.stream().map(automobile -> new AutomobileDTO(automobile)).toList();
	}

	// Read (FindById)
	public AutomobileDTO findById(Long id) {
		Automobile automobile = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Automóvel não encontrado"));
		return new AutomobileDTO(automobile);
	}

	// Update
	public AutomobileDTO update(Long id, AutomobileDTO automobileDTO) {
		try {
			Automobile automobile = repository.getReferenceById(id);
			copyDtoToEntity(automobile, automobileDTO);
			return new AutomobileDTO(repository.save(automobile));
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Automóvel não encontrado");
		}
	}

	// Delete
	public void delete(Long id) {
		if (!repository.existsById(id)) {
			throw new ResourceNotFoundException("Automóvel não encontrado");
		}
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Não é possivel apagar esse veiculo");
		}
	}

	private void copyDtoToEntity(Automobile automobile, AutomobileDTO automobileDTO) {
		automobile.setImgUrl(automobile.getImgUrl());
		automobile.setPlate(automobileDTO.getPlate());
		automobile.setColor(automobileDTO.getColor());
		automobile.setKm(automobileDTO.getKm());
		automobile.setYear(automobileDTO.getYear());
		automobile.setValuePerDay(automobileDTO.getValuePerDay());
		automobile.setReturned(automobileDTO.getReturned());

		Model model = new Model();
		model.setId(automobileDTO.getModel().getId());
		automobile.setModel(model);
	}
}
