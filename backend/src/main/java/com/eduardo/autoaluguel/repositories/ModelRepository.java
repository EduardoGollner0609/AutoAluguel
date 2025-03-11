package com.eduardo.autoaluguel.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {

	boolean existsByName(String name);

	Optional<Model> findByNameIgnoreCase(String name);
	
}
