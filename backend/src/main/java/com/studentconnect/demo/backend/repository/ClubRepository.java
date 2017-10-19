package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<Club, Integer> {
}
