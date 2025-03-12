package com.eduardo.autoaluguel.services.validations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.eduardo.autoaluguel.controllers.handlers.FieldMessage;
import com.eduardo.autoaluguel.dtos.ClientDTO;
import com.eduardo.autoaluguel.entities.Client;
import com.eduardo.autoaluguel.repositories.ClientRepository;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ClientValidator implements ConstraintValidator<ClientValid, ClientDTO> {

	@Autowired
	private ClientRepository repository;

	@Override
	public void initialize(ClientValid ann) {
	}

	@Override
	public boolean isValid(ClientDTO dto, ConstraintValidatorContext context) {

		List<FieldMessage> list = new ArrayList<>();

		if (dto.getCpf().matches(".*[,.\\-].*")) {
			list.add(new FieldMessage("cpf", "O CPF deve receber apenas números."));
		}

		Optional<Client> client = repository.findByCpf(dto.getCpf());

		if (client.isPresent()) {
			list.add(new FieldMessage("cpf", "Este CPF já está cadastrado."));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}

		return list.isEmpty();
	}
}
