package com.rave_backend.book_of_ravealation_backend.dto;

public record UsersResponse(
        Long userId,
        String firstName,
        String lastName,
        String email
) {
}
