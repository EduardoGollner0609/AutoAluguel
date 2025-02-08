package com.eduardo.autoaluguel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {

}
