package com.rave_backend.book_of_ravealation_backend.controllers;

import com.rave_backend.book_of_ravealation_backend.dto.UserRegistrationRequest;
import com.rave_backend.book_of_ravealation_backend.dto.UsersResponse;
import com.rave_backend.book_of_ravealation_backend.entities.Users;
import com.rave_backend.book_of_ravealation_backend.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    //Get a single user by their ID
    @GetMapping("/{userId}")
    public UsersResponse getUsersByUserId(@PathVariable Long userId) {
        var user = usersService.getUsersByUserId(userId);
        return user.toResponse();
    }

    //Get all users in the DB
    @GetMapping
    public Set<UsersResponse> getAllUsers() {
        var userSet = usersService.getAllUsers();
        return userSet.stream()
                .map(Users :: toResponse)
                .collect(Collectors.toSet());
    }

    //Register a new user
    @PostMapping("/register")
    public ResponseEntity<Void> registerUser(@RequestBody UserRegistrationRequest request) {
        usersService.registerUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    //Delete a user
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        usersService.deleteUser(userId);

        return ResponseEntity.ok().build();
    }
}
