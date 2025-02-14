package com.eduardo.autoaluguel.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eduardo.autoaluguel.dtos.BrandDTO;
import com.eduardo.autoaluguel.entities.Brand;
import com.eduardo.autoaluguel.repositories.BrandRepository;
import com.eduardo.autoaluguel.services.exceptions.ResourceNotFoundException;

@Service
public class BrandService {

	@Autowired
	private BrandRepository repository;

	public void insert(BrandDTO brandDTO) {
		Brand brand = new Brand();
		copyDtoToEtntity(brand, brandDTO);
		repository.save(brand);
	}

	public List<BrandDTO> findAll() {
		List<Brand> brands = repository.findAll();
		return brands.stream().map(brand -> new BrandDTO(brand)).toList();
	}

	public BrandDTO findById(Long id) {
		Brand brand = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Marca não encontrada"));
		return new BrandDTO(brand);
	}

	private void copyDtoToEtntity(Brand brand, BrandDTO brandDTO) {
		brand.setName(brandDTO.getName());
	}

}
