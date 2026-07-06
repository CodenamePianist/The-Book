package com.rave_backend.book_of_ravealation_backend.service;

import com.rave_backend.book_of_ravealation_backend.entities.Users;
import com.rave_backend.book_of_ravealation_backend.repositories.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UsersService {
    private final UsersRepository usersRepository;
    private Users users;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    public Users getUsersByUserId(Long userId) {
        var user = usersRepository.findById(userId);

        if (user.isPresent()) {
            return user.get();
        }

        return null;
    }

    public Set<Users> getAllUsers() {
        var users = usersRepository.findAll();
        var responseList = new HashSet<Users>();

        for (Users user : users) {
            responseList.add(user);
        }

        return responseList;
    }
}
