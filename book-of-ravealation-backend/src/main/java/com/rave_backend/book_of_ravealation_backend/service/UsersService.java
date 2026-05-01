package com.rave_backend.book_of_ravealation_backend.service;

import com.rave_backend.book_of_ravealation_backend.entities.Users;
import com.rave_backend.book_of_ravealation_backend.repositories.UsersRepository;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    private final UsersRepository usersRepository;
    private Users users;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }
}
