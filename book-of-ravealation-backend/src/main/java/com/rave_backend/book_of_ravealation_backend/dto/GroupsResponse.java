package com.rave_backend.book_of_ravealation_backend.dto;

import java.util.Date;
import java.util.Set;

public record GroupsResponse(
        Long groupId,
        String groupName,
        Date createdAt,
        Date updatedAt,
        Set<UsersResponse> members
) {
}
