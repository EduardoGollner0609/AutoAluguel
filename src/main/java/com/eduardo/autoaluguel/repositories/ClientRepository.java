package com.eduardo.autoaluguel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
