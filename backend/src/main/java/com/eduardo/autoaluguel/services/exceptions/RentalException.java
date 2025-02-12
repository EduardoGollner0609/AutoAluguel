package com.eduardo.autoaluguel.services.exceptions;

@SuppressWarnings("serial")
public class RentalException extends RuntimeException {

	public RentalException(String msg) {
		super(msg);
	}
}
