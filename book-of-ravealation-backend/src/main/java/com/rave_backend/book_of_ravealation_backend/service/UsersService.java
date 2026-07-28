package com.rave_backend.book_of_ravealation_backend.service;

import com.rave_backend.book_of_ravealation_backend.dto.UserRegistrationRequest;
import com.rave_backend.book_of_ravealation_backend.entities.Users;
import com.rave_backend.book_of_ravealation_backend.exception.ResourceNotFoundException;
import com.rave_backend.book_of_ravealation_backend.repositories.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UsersService {
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    public Users getUsersByUserId(Long userId) {
        var user = usersRepository.findById(userId);
        return user.orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));
    }

    public Set<Users> getAllUsers() {
        var users = usersRepository.findAll();
        var responseList = new HashSet<Users>();

        for (Users user : users) {
            responseList.add(user);
        }

        return responseList;
    }

    public void registerUser(UserRegistrationRequest request) {
        Users newUser = new Users();
        newUser.setFirstName(request.firstName());
        newUser.setLastName(request.lastName());
        newUser.setPassword(request.password());
        newUser.setEmail(request.email());

        usersRepository.save(newUser);
    };
}
