package com.rave_backend.book_of_ravealation_backend.service;

import com.rave_backend.book_of_ravealation_backend.dto.GroupsResponse;
import com.rave_backend.book_of_ravealation_backend.entities.Groups;
import com.rave_backend.book_of_ravealation_backend.repositories.GroupsRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class GroupsService {
    private final GroupsRepository groupsRepository;

    public GroupsService(GroupsRepository groupsRepository) {
        this.groupsRepository = groupsRepository;
    }


    public Groups getGroupsByGroupId(Long groupId) {
        var group = groupsRepository.findById(groupId);

        if (group.isPresent()) {
            return group.get();
        }

        return null;
    }

    public Set<GroupsResponse> getAllGroups() {
        var groups = groupsRepository.findAll();
        var responseList = new HashSet<GroupsResponse>();

        for (var group : groups) {
            responseList.add(new GroupsResponse(group.getGroupId(), group.getGroupName(), group.getCreatedAt(), group.getUpdatedAt(), group.getMembers()));
        }

        return responseList;
    }
}
