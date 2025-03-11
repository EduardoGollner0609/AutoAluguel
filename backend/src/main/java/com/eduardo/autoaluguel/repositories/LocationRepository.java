package com.eduardo.autoaluguel.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

	@Query(value = "SELECT l FROM Location l JOIN FETCH l.client JOIN FETCH l.automobile a JOIN FETCH a.model m JOIN FETCH m.brand ORDER BY l.rentalDate DESC", countQuery = "SELECT COUNT(l) FROM Location l")
	Page<Location> findAllPaged(Pageable pageable);

}
