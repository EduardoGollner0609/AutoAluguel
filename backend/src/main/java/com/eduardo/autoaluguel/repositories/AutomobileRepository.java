package com.eduardo.autoaluguel.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Automobile;

@Repository
public interface AutomobileRepository extends JpaRepository<Automobile, Long> {

	@Query("SELECT a FROM Automobile a ORDER BY a.returned DESC")
	List<Automobile> findAllOrderByReturned();

}
