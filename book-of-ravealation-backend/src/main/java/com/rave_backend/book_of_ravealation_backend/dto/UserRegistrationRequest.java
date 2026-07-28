package com.rave_backend.book_of_ravealation_backend.dto;

public record UserRegistrationRequest(
        String firstName,
        String lastName,
        String password,
        String email
) {
}
