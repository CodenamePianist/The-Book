package com.rave_backend.book_of_ravealation_backend.controllers;

import com.rave_backend.book_of_ravealation_backend.dto.UsersResponse;
import com.rave_backend.book_of_ravealation_backend.service.UsersService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    //Get a single user by their ID
    @GetMapping("/{userId}")
    public UsersResponse getUserById(@PathVariable Long userId) {
        var user = usersService.getUsersbyUserId(userId);
        return user;
    }

    //Get all users in the DB
    @GetMapping
    public Set<UsersResponse> getAllUsers() {
        var users = usersService.getAllUsers();
        return users;
    }
}
