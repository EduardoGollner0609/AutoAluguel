package com.eduardo.autoaluguel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

}
