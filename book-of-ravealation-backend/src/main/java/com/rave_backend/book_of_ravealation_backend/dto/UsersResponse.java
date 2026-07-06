package com.rave_backend.book_of_ravealation_backend.dto;

import java.util.Set;

public record UsersResponse(
        Long userId,
        String firstName,
        String lastName,
        String email,
        Set<GroupsResponse> groups
) {
}
