package com.eduardo.autoaluguel.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Automobile;

@Repository
public interface AutomobileRepository extends JpaRepository<Automobile, Long> {

	@Query(value = "SELECT a FROM Automobile a LEFT JOIN FETCH a.model m LEFT JOIN FETCH m.brand")
	Page<Automobile> findAllPaged(Pageable pageable);

}
