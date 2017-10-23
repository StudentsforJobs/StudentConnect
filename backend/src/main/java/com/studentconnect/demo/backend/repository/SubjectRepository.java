package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
}
