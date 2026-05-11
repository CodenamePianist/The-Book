package com.rave_backend.book_of_ravealation_backend.service;

import com.rave_backend.book_of_ravealation_backend.dto.UsersResponse;
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

    private UsersResponse buildUserResponse(Users user) {
        return new UsersResponse(user.getUserId(), user.getFirstName(), user.getLastName(), user.getEmail() );
    }

    public UsersResponse getUsersbyUserId(Long userId) {
        var user = usersRepository.findById(userId);

        if (user.isPresent()) {
            var u = user.get();
            return buildUserResponse(u);
        }

        return null;
    }

    public Set<UsersResponse> getAllUsers() {
        var users = usersRepository.findAll();
        var responseList = new HashSet<UsersResponse>();

        for (var user : users) {
            responseList.add(new UsersResponse(user.getUserId(), user.getFirstName(), user.getLastName(), user.getEmail()));
        }
        return responseList;
    }
}
