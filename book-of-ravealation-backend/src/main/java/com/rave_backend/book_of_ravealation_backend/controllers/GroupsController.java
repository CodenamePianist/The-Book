package com.rave_backend.book_of_ravealation_backend.controllers;

import com.rave_backend.book_of_ravealation_backend.dto.GroupsResponse;
import com.rave_backend.book_of_ravealation_backend.entities.Groups;
import com.rave_backend.book_of_ravealation_backend.service.GroupsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    private final GroupsService groupsService;

    public GroupsController(GroupsService groupsService) {
        this.groupsService = groupsService;
    }

    //Get a single group by the groupId
    @GetMapping("/{groupId}")
    public GroupsResponse getGroupsById(@PathVariable Long groupId) {
        var group = groupsService.getGroupsByGroupId(groupId);
        return group.toResponse();
    }
    //Get all groups
    @GetMapping
    public Set<GroupsResponse> getAllGroups() {
        var groupSet = groupsService.getAllGroups();
        return groupSet.stream()
                .map(Groups :: toResponse)
                .collect(Collectors.toSet());
    }



}
