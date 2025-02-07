package com.eduardo.autoaluguel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Automobile;

@Repository
public interface AutomobileRepository extends JpaRepository<Automobile, Long> {

}
