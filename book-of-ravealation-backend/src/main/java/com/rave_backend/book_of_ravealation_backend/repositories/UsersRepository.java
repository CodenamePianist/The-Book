package com.rave_backend.book_of_ravealation_backend.repositories;

import com.rave_backend.book_of_ravealation_backend.entities.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, Long> {
}
