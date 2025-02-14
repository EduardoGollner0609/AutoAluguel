package com.eduardo.autoaluguel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.autoaluguel.entities.Model;
import com.eduardo.autoaluguel.repositories.ModelRepository;

@Service
public class ModelService {

	@Autowired
	private ModelRepository repository;

	@Transactional(readOnly = true)
	public boolean existsByName(String name) {
		return repository.existsByName(name);
	}

	@Transactional
	public Model insert(Model model) {
	return repository.save(model);
	}
}
