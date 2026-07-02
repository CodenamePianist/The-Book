package com.rave_backend.book_of_ravealation_backend.controllers;

import com.rave_backend.book_of_ravealation_backend.dto.GroupsResponse;
import com.rave_backend.book_of_ravealation_backend.entities.Groups;
import com.rave_backend.book_of_ravealation_backend.service.GroupsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    private final GroupsService groupsService;

    public GroupsController(GroupsService groupsService) {
        this.groupsService = groupsService;
    }

    private GroupsResponse buildGroupsResponse(Groups groups) {
        return new GroupsResponse(groups.getGroupId(), groups.getGroupName(), groups.getCreatedAt(), groups.getUpdatedAt(), groups.getMembers());
    }

    //Get all groups
    @GetMapping
    public Set<GroupsResponse> getAllGroups() {
        var groups = groupsService.getAllGroups();
        return groups;
    }

    //Get a single group by the groupId
    @GetMapping("/{groupId}")
    public GroupsResponse getGroupById(@PathVariable long groupId) {
        var group = groupsService.getGroupsByGroupId(groupId);
        GroupsResponse response = buildGroupsResponse(group);
        return response;
    }

}
