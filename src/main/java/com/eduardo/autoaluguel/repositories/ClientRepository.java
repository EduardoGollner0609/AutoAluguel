package com.eduardo.autoaluguel.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.autoaluguel.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

	Optional<Client> findByCpf(String cpf);
	
}
